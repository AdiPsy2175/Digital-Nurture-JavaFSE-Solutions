// Exercise 32 - Insert and Update Operations in JDBC

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Exercise_32 {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/cognizant_java";
        String username = "root";
        String password = "Adity@2175";

        try {

            Connection con = DriverManager.getConnection(url, username, password);

            // Insert Record
            String insertQuery =
                    "INSERT INTO students(id, name, age) VALUES (?, ?, ?)";

            PreparedStatement insertStmt =
                    con.prepareStatement(insertQuery);

            insertStmt.setInt(1, 104);
            insertStmt.setString(2, "Aman");
            insertStmt.setInt(3, 23);

            int rowsInserted = insertStmt.executeUpdate();

            System.out.println(rowsInserted +
                    " record inserted successfully.");

            // Update Record
            String updateQuery =
                    "UPDATE students SET age=? WHERE id=?";

            PreparedStatement updateStmt =
                    con.prepareStatement(updateQuery);

            updateStmt.setInt(1, 24);
            updateStmt.setInt(2, 104);

            int rowsUpdated = updateStmt.executeUpdate();

            System.out.println(rowsUpdated +
                    " record updated successfully.");

            con.close();

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }
    }
}