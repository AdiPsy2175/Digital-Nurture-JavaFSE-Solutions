// Exercise 35 - TCP Client Server Chat (Client)

import java.io.DataOutputStream;
import java.net.Socket;

public class Exercise_35_Client {

    public static void main(String[] args) {

        try {

            Socket socket = new Socket("localhost", 5000);

            DataOutputStream dos =
                    new DataOutputStream(socket.getOutputStream());

            dos.writeUTF("Hello from Client!");

            dos.close();
            socket.close();

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }
    }
}