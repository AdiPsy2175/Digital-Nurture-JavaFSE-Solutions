// Exercise 31 - Basic JDBC Connection

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Exercise_31 {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/cognizant_java";
        String username = "root";
        String password = "Adity@2175";

        try {

            Connection con = DriverManager.getConnection(url, username, password);

            Statement stmt = con.createStatement();

            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            System.out.println("Student Records:");

            while (rs.next()) {

                System.out.println(
                        rs.getInt("id") + " "
                                + rs.getString("name") + " "
                                + rs.getInt("age")
                );
            }

            con.close();

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }
    }
}