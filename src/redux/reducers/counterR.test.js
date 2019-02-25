import reducer from './counterReducer'
import * as actions from '../actions'
import Immutable from 'immutable';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
			Immutable.Map({
				counter: 0
			})
    )
  })

  it('should handle INCREMENT', () => {
    expect(
      reducer(undefined, {
        type: actions.INCREMENT,
				value: 1
      })
    ).toEqual(
      Immutable.Map({
        counter: 1
      })
    )

    expect(
      reducer(
				{
					counter: 1
				},
        {
          type: actions.INCREMENT,
          value: 2
        }
      )
    ).toEqual(
      {
        counter: 3
      }
  	)
  })
})