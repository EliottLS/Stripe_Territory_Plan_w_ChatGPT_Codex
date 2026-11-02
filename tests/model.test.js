import test from 'node:test';
import assert from 'node:assert/strict';
import {calculatePlan,defaultTargets,normaliseRows,sampleAccounts} from '../src/model.js';
test('long sales cycles do not forecast new pipeline closing inside 90 days',()=>{const p=calculatePlan(defaultTargets);assert.equal(p.forecast,212500);assert.equal(p.generated,2925000);assert.equal(p.requiredOpps,16)});
test('shorter sales cycles and changed weekly targets affect forecast',()=>{const p=calculatePlan({...defaultTargets,salesCycle:30,weeklyOpportunities:1});assert.equal(p.forecast,375000);assert.equal(p.generated,975000)});
test('scenarios adjust activity and generated pipeline',()=>{const p=calculatePlan({...defaultTargets,scenario:'Conservative'});assert.equal(p.generated,2340000);assert.equal(p.meetings,83)});
test('imports reject duplicate names, missing names, and invalid numbers',()=>{const r=normaliseRows([{Company:'Acme',Value:'100'},{Company:'acme',Value:'90'},{Company:'',Value:'100'},{Company:'Other',Value:'invalid'}],{name:'Company',opportunity:'Value'});assert.equal(r.errors.length,3)});
test('mapped currency imports retain unknown fields and unverified provenance',()=>{const r=normaliseRows([{Company:'Acme',Value:'$125,000',Score:'89'}],{name:'Company',opportunity:'Value',score:'Score'});assert.deepEqual(r.errors,[]);assert.equal(r.accounts[0].opportunity,125000);assert.equal(r.accounts[0].products,'Unknown');assert.equal(r.accounts[0].evidence,'Imported — unverified')});
test('sample scores are explained and all sample data is labelled',()=>{for(const a of sampleAccounts){assert.equal(a.fit+a.potential+a.timing+a.access,a.score);assert.equal(a.evidence,'Demo data')}});
