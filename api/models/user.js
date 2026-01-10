import { connection } from "../core/database.js";
import { encryptPassword } from "../utils/hash.js";

class User {
  constructor() {
    this.db = connection;
  }

  async generateId() {
  try {
    const year = new Date().getFullYear().toString();

    const [rows] = await this.db.execute(
      `SELECT id
       FROM users
       WHERE id LIKE ?
       ORDER BY id DESC
       LIMIT 1`,
      [`USR${year}%`]
    );

    let nextNumber = 1;

    if (rows.length > 0) {
      const lastId = rows[0].id;
      const lastNumber = parseInt(lastId.slice(-2), 10);
      nextNumber = lastNumber + 1;
    }

    return `USR${year}${String(nextNumber).padStart(2, "0")}`;
  } catch (err) {
    console.error("<error> user.generateId", err);
    throw err;
  }
}


  // Create User
  async create(username, password, role) {
    try {
      const id = await this.generateId();
      const [results, ] = await this.db.execute(
        "INSERT INTO users (id, username, password, role, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
        [id, username, encryptPassword(password), role]
      );
      return results;
    } catch(err) {
        console.error("<error> user.create", err);
        throw err;
    }
  }

  // Verify user
  async verify(username, password) {
    try {
      console.log(encryptPassword(password))
      const [results, ] = await this.db.execute(
        'SELECT * FROM users WHERE username=? AND password=?',
        [username, encryptPassword(password)]
      );
      const user = results?.[0];
      return { 
        "username": user.username,
        "role": user.role
      };
    } catch(err) {
        console.error("<error> user.verify", err);
        throw err;
    }
  }

  // Get user
  async get(username) {
    try{
      const [results, ] = await this.db.execute(
        "SELECT * FROM users WHERE username=?",
        [username]
      );
      return results?.[0];
    } catch(err) {
        console.error("<error> user.get", err);
        throw err;
    }
  }

  // Update user
  async update(userId, username, fullname, email, password) {
    try {
      const [results, ] = await this.db.execute(
        "UPDATE users SET username=?, fullname=?, emailaddress=?, password=?, updated_at=NOW() WHERE userId=?",
        [username, fullname, email, encryptPassword(password), userId]
      );
      return results;
    } catch(err) {
      console.error("<error> user.update", err);
    }
  }
}

export default User;