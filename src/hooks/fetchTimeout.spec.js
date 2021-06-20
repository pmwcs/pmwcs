import assert from 'assert'
import { setDefaultHeaders } from './fetchTimeout.js'

describe('ui/hooks', function () {
  describe('setDefaultHeaders', function () {
    it('shall not add default header', function () {
      assert.deepStrictEqual(setDefaultHeaders(), {})
    })

    it('shall not add default header for GET', function () {
      assert.deepStrictEqual(setDefaultHeaders({ method: 'GET' }), { method: 'GET' })
    })

    it('shall add Content-Type for POST', function () {
      assert.deepStrictEqual(setDefaultHeaders({ method: 'POST' }), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' }
      })
    })

    it('shall add Content-Type for PUT', function () {
      assert.deepStrictEqual(setDefaultHeaders({ method: 'PUT', headers: { 'X-Custom': 'Custom header' } }), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'X-Custom': 'Custom header' }
      })
    })

    it('shall add Content-Type for PATCH', function () {
      assert.deepStrictEqual(setDefaultHeaders({ method: 'PATCH', headers: { 'X-Custom': 'Custom header' } }), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'X-Custom': 'Custom header' }
      })
    })
  })
})
