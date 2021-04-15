import mockedArr from './ArrayToFilter.MOCK.json';
import {filterArrByArguments} from "../util";
import {Movie} from "../../models/http/getMovies";

describe('filterArrByArguments', () => {

    test('sending a matching query and getting filtered Array with the correct item', () => {
        const keysToFilter = ['title', 'id'];
        const queryText = '2001';

        const results = filterArrByArguments<Movie>(mockedArr, keysToFilter, queryText )

        expect(results[0].id).toBe('207856')
        expect(results.length).toBe(1)
    })

    test('sending a matching query and getting filtered Array with the correct items', () => {
        const keysToFilter = ['title', 'released'];
        const queryText = '2001';

        const results = filterArrByArguments<Movie>(mockedArr, keysToFilter, queryText )

        expect(results.length).toBe(6)
    })

    test('sending empty array and getting an empty array', () => {
        const keysToFilter = ['title', 'released'];
        const queryText = '2001';

        const results = filterArrByArguments<Movie>([], keysToFilter, queryText )

        expect(results.length).toBe(0)
    })

    test('sending empty query text and getting unfiltered array', () => {
        const keysToFilter = ['title', 'released'];
        const queryText = '';

        const results = filterArrByArguments<Movie>(mockedArr, keysToFilter, queryText )

        expect(results).toEqual(mockedArr)
    })

    test('sending unmatched keys and getting an empty array', () => {
        const keysToFilter = ['title2', 'released2'];
        const queryText = '2001';

        const results = filterArrByArguments<Movie>(mockedArr, keysToFilter, queryText )

        expect(results.length).toBe(0)
    })
})
