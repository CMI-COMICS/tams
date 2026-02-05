import fs from "fs";
import { connection } from "../core/database.js";

class Student {
  async import(path) {
    try {
      const query = `
        LOAD DATA LOCAL INFILE 'ignored_path_placeholder'
        INTO TABLE students
        FIELDS TERMINATED BY ','
        ENCLOSED BY '"'
        LINES TERMINATED BY '\r\n'
        IGNORE 1 ROWS
        (id, last_name, first_name, middle_name, gender, course, level, payment_status)
      `;

      const [result] = await connection.query(
        {
          sql: query,
          infileStreamFactory: () => fs.createReadStream(path), // ✅ provide ReadStream
        }
      );

      return result;
    } catch (err) {
      console.error("<error> student.import", err);
      throw err;
    }
  }
}

export default Student;