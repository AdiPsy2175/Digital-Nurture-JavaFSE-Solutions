// Exercise 33 - Transaction Handling in JDBC

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Exercise_33 {

    public static void main(String[] args) {

        String url = "jdbc:mysql://localhost:3306/cognizant_java";
        String username = "root";
        String password = "Adity@2175";

        try {

            Connection con =
                    DriverManager.getConnection(url, username, password);

            con.setAutoCommit(false);

            double transferAmount = 1000;

            String debitQuery =
                    "UPDATE accounts SET balance = balance - ? WHERE id = ?";

            PreparedStatement debitStmt =
                    con.prepareStatement(debitQuery);

            debitStmt.setDouble(1, transferAmount);
            debitStmt.setInt(2, 1);

            debitStmt.executeUpdate();

            String creditQuery =
                    "UPDATE accounts SET balance = balance + ? WHERE id = ?";

            PreparedStatement creditStmt =
                    con.prepareStatement(creditQuery);

            creditStmt.setDouble(1, transferAmount);
            creditStmt.setInt(2, 2);

            creditStmt.executeUpdate();

            con.commit();

            System.out.println("Transaction Successful.");

            con.close();

        } catch (Exception e) {

            System.out.println("Transaction Failed.");

            e.printStackTrace();
        }
    }
}