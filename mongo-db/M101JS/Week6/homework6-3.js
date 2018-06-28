/*  Homework 6.3: 
    For companies in our collection founded in 2004 and having 
    5 or more rounds of funding, calculate the average amount raised
    in each round of funding. Which company meeting these criteria
    raised the smallest average amount of money per funding round?
    You do not need to distinguish between currencies. Write an
    aggregation query to answer this question. */

/*  Variation 1:
    - two projection stages
    - don't change $funding_rounds array
    - calculate avg funding_amount after filtering companies */
db.companies.aggregate([
  { $match: {
    "founded_year": 2004
  } },
  { $project: {
    "_id": 0,
    "name": "$name",
    "funding_rounds": "$funding_rounds",
    "nmbr_funding_rounds": { $size: "$funding_rounds" }
  }},
  { $match: {
    "nmbr_funding_rounds": { $gte: 5 }
  }},
  { $project: {
    "name": "$name",
    "avg_amount": {$avg: "$funding_rounds.raised_amount" }
  } },
  { $sort: {
    "avg_amount": 1
  }}
])

/*  Variation 2:
    - two projection stages
    - only project raised_amount from $funding_rounds array
    - calculate avg funding_amount after filtering companies */
db.companies.aggregate([
  { $match: {
    "founded_year": 2004
  } },
  { $project: {
    "_id": 0,
    "name": "$name",
    "raised_amount": "$funding_rounds.raised_amount",
    "nmbr_funding_rounds": { $size: "$funding_rounds" }
  }},
  { $match: {
    "nmbr_funding_rounds": { $gte: 5 }
  }},
  { $project: {
    "name": "$name",
    "avg_amount": {$avg: "$raised_amount" }
  } },
  { $sort: {
    "avg_amount": 1
  }}
])

/*  Variation 3:
    - only one projection stage
    - calculate avg raised_amount (for all companies) */
var before = new Date()
db.companies.aggregate([
  { $match: {
    "founded_year": 2004
  } },
  { $project: {
    "_id": 0,
    "name": "$name",
    "avg_amount": {$avg: "$funding_rounds.raised_amount" },
    "nmbr_funding_rounds": { $size: "$funding_rounds" }
  }},
  { $match: {
    "nmbr_funding_rounds": { $gte: 5 }
  }},
  { $sort: {
    "avg_amount": 1
  }}
])
