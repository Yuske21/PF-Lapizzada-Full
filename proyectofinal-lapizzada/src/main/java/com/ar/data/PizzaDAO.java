package com.ar.data;

import static com.ar.data.Conexion.getConexion;
import static com.ar.data.Conexion.close;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.ar.model.Pizza;

public class PizzaDAO {
    
    private static final String SQL_SELECT = "SELECT * FROM pizza";
    

    public static List<Pizza> listaProducto(){        
        Connection conn = null;
        PreparedStatement ps = null;
        ResultSet rs = null;
        Pizza miPizza = null;
        List<Pizza> pizzas = new ArrayList<>();        

        try {            
            conn = getConexion();            
            ps = conn.prepareStatement(SQL_SELECT);            
            rs = ps.executeQuery();            

            while (rs.next()){
                int id = rs.getInt("id_pizza");
                String nombre = rs.getString("nombre");
                String descripcion = rs.getString("descripcion");
                String ingrediente = rs.getString("ingrediente");
                int precio = rs.getInt("precio");
                int calificacion = rs.getInt("calificacion");
                byte estrella = rs.getByte("estrella");
                String chef = rs.getString("chef");

                miPizza = new Pizza(id, nombre, descripcion, ingrediente, precio , calificacion, estrella, chef);
                pizzas.add(miPizza);

            }
        } catch (SQLException e) {
            e.printStackTrace(System.out);
        }finally{
            try {
                close(rs);
                close(ps);
                close(conn);
            } catch (Exception e) {
                e.printStackTrace(System.out);
            }
        }
        return pizzas;

    }

    
}
