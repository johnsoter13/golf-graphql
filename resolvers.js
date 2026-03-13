import { pool } from "./db.js";

export const resolvers = {
  Query: {
    scores: async () => {
      const result = await pool.query(`
        SELECT
          id,
          course_name AS "courseName",
          score,
          course_rating AS "courseRating",
          course_slope AS "courseSlope",
          played_at::text AS "playedAt"
        FROM scores
        ORDER BY played_at DESC
      `);

      return result.rows;
    },

    score: async (_, { id }) => {
      const result = await pool.query(
        `
        SELECT
          id,
          course_name AS "courseName",
          score,
          course_rating AS "courseRating",
          course_slope AS "courseSlope",
          played_at::text AS "playedAt"
        FROM scores
        WHERE id = $1
        `,
        [id]
      );

      return result.rows[0] ?? null;
    },
  },
};