package com.ar.model;

public class Pizza {

    private int id;
    private String nombre;
    private String descripcion;
    private String ingrediente;
    private float precio;
    private int calificacion;
    private byte estrella;
    private String chef;

    public Pizza(int id, String nombre, String descripcion, String ingrediente, float precio, int calificacion, byte estrella, String chef){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ingrediente = ingrediente;
        this.precio = precio;
        this.calificacion = calificacion;
        this.estrella = estrella;
        this.chef = chef;
    }

    // Getters and Setters
    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(String ingrediente) {
        this.ingrediente = ingrediente;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

    public byte getEstrella() {
        return estrella;
    }

    public void setEstrella(byte estrella) {
        this.estrella = estrella;
    }

    public String getChef() {
        return chef;
    }

    public void setChef(String chef) {
        this.chef = chef;
    }

    @Override
    public String toString() {
        return "Pizza [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", ingrediente="
                + ingrediente + ", precio=" + precio + ", calificacion=" + calificacion + ", estrella=" + estrella
                + ", chef=" + chef + "]";
    }

    /*
    @Override
    public String toString() {
        return "Pizza [getId()=" + getId() + ", getNombre()=" + getNombre() + ", getDescripcion()=" + getDescripcion()
                + ", getPrecio()=" + getPrecio() + ", getCalificacion()=" + getCalificacion() + ", getEstrella()="
                + getEstrella() + ", getChef()=" + getChef() + "]";
    }*/

    

}
