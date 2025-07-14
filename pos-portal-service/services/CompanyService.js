const cache = require('../utils/cache')
const { mappingResultData } = require('../utils/ConvertThai')
const { withTimeout } = require('../utils/promiseTimeout')

const getDataCompanyByOne = async ({ repository }) => {
    const cacheKey = 'company_one'

    // 1. check cache
    const cached = cache.get(cacheKey)
    if (cached) {
        console.log('🔄 Cache hit')
        return cached;
    }

    console.log('🚀 Cache miss, querying DB')

    // 2. call DB with timeout
    const results = await withTimeout(repository.getDataCompanyByOne(), 3000)
    if (results.length === 0) {
        const err = new Error("Company not found")
        err.statusCode = 404
        throw err
    }

    const mapped = mappingResultData(results);

    // 3. store to cache
    cache.set(cacheKey, mapped, 60); // TTL = 60 sec
    return mapped;
}

module.exports = {
    getDataCompanyByOne
}
