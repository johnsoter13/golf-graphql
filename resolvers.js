import { pool } from "./db.js";

export const resolvers = {
  Query: {
    scores: async () => {
      return [
        {
          id: "1",
          courseName: "Test Course",
          score: 85,
          courseRating: 72.4,
          courseSlope: 131,
          playedAt: "2026-03-12",
        },
      ];
    },

    score: async (_, { id }) => {
      try {
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
      } catch (error) {
        console.error("Error in score resolver:", error);
        throw error;
      }
    },
  },
};