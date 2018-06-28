/*  Homework 6-2:
    There are documents for each student (student_id) across a variety of
    classes (class_id). Note that not all students in the same class have
    the same exact number of assessments. Some students have three
    homework assignments, etc.
    Your task is to calculate the class with the best average student
    performance. This involves calculating an average for each student in
    each class of all non-quiz assessments and then averaging those
    numbers to get a class average. To be clear, each student's average
    should include only exams and homework grades. Don't include their
    quiz scores in the calculation.
    What is the class_id which has the highest average student performance?
    Choose the correct class_id below. */

db.grades.aggregate([
  { $project: {
    "_id": 0,
    "class_id": 1,
    "scores": {
      $filter: {
        input: "$scores",
        as: "score",
        cond: { $or: [
          { $eq: ["$$score.type", "homework" ] },
          { $eq: ["$$score.type", "exam" ] }
        ] }
      } 
    }
  } },
  { $project: {
    "_id": 0,
    "class_id": 1,
    "avgByStudent": { $avg: "$scores.score" }
  }},
  { $group: {
    _id: { "class_id": "$class_id" },
    avgByClass: { $avg: "$avgByStudent" }
  }},
  { $sort: {
    average: -1
  }}
])