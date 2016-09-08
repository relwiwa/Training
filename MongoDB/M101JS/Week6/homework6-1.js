/*  Homework 6-1:
    Write an aggregation query that will determine the number of unique companies
    with which an individual has been associated. To test that you wrote your
    aggregation query correctly, from the choices below, select the number of
    unique companies that Eric Di Benedetto (eric-di-benedetto) has been
    associated with. I've attached the CrunchBase data set for use in this problem. */

/* Extract company names, make them unique, get size of Array */
db.companies.aggregate( [
  { $match: { "relationships.person.permalink": "eric-di-benedetto" } },
  { $project: {
      "_id": 0,
      "company_name": "$name"
  }},
  { $group: {
      _id: null,
      "unique_companies": { $addToSet: "$company_name" }
  }},
  { $project: {
      "_id": 0,
      "solution": { $size: "$unique_companies" }
  }}
] )