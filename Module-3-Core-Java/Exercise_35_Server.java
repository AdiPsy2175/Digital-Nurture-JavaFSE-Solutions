// Exercise 35 - TCP Client Server Chat (Server)

import java.io.DataInputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Exercise_35_Server {

    public static void main(String[] args) {

        try {

            ServerSocket serverSocket = new ServerSocket(5000);

            System.out.println("Server is waiting for connection...");

            Socket socket = serverSocket.accept();

            System.out.println("Client connected.");

            DataInputStream dis =
                    new DataInputStream(socket.getInputStream());

            String message = dis.readUTF();

            System.out.println("Message from Client: " + message);

            dis.close();
            socket.close();
            serverSocket.close();

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }
    }
}