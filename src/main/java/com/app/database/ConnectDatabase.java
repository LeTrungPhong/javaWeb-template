package com.app.database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class ConnectDatabase {
	
	public static Connection getConnection(){
		
		String connectionUrl = "jdbc:sqlserver://LAPTOP-DBU555O6:1433;databaseName=appManageHotel;user=sa;password=123;encrypt=true;trustServerCertificate=true";
		try {
			try {
				Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        	Connection con = DriverManager.getConnection(connectionUrl); 
        	Statement stmt = con.createStatement();
        	System.out.println("Ket noi thanh cong");
        	return con;
        }
        
        catch (SQLException e) {
            e.printStackTrace();
        }
		return null;
	}
	
	public static void closeConnection(Connection connection) {
		try {
			connection.close();
		} catch(Exception e){
			e.printStackTrace();
		}
	}
}
