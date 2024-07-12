package com.ar.data;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;

public class Conexion {

    private final static String JDBC_URL = "jdbc:mysql://localhost:3306/lapizzada?useSSL=false&useTimeZone=true&serverTimeZone=UTC&allowPublicKeyReference=true";
    private final static String JDBC_USER = "root";
    private final static String JDBC_PASS = "";

    public static DataSource getDataSource(){
        BasicDataSource bds = new BasicDataSource();

        bds.setUrl(JDBC_URL);
        bds.setUsername(JDBC_USER);
        bds.setPassword(JDBC_PASS);
        bds.setInitialSize(100);
        
        return bds;        
    }

    public static Connection getConexion() throws SQLException{
        try {            
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (Exception e) {
            e.printStackTrace(System.out);            
        }
        return getDataSource().getConnection();
    }

    public static void close(ResultSet rs) throws SQLException{
        rs.close();
    }

    public static void close(Statement st) throws SQLException{
        st.close();
    }

    public static void close(Connection cn) throws SQLException{
        cn.close();
    }
}
