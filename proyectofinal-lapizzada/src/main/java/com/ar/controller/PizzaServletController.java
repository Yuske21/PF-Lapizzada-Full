package com.ar.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ar.data.PizzaDAO;
import com.ar.model.Pizza;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.*;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/pizzas")
public class PizzaServletController extends HttpServlet {

    static Logger logger = LoggerFactory.getLogger(PizzaServletController.class);
    List<Pizza> pizzaList = new ArrayList<>();
    ObjectMapper mapper = new ObjectMapper();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException{
        String route = req.getParameter("action");
        logger.info("La Ruta: " + route);
        switch (route){
            case "getAll"-> {
                res.setContentType("application/json; charset-UTF-8");
                pizzaList = PizzaDAO.listaProducto();
                logger.info("Pizzas dentro de getAll: " + pizzaList.size());
                // transformo en json y lo envio
                mapper.writeValue(res.getWriter(), pizzaList);
                logger.info(mapper.toString());
            }

            default -> {
                System.out.println("Parametro no valido");
            }
        }
    }
    

}
