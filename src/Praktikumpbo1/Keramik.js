/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Praktikumpbo1;

/**
 *
 * @author User
 */
public class Keramik {
    /*membuat atribut*/
    int p;
    int l;
    int luas;
    int keramik;
    int isibox;
    int harga;
    
    /*membuat methode*/
   
    void hitungKeramik(){
        int keramik;
        keramik = this.luas / (this.p * this.l);
        System.out.println("Keramik: " + keramik + "  buah"); 
    }
    void hitungBox(){
        int box;
        box = (this.luas / (this.p * this.l)) / this.isibox;
        System.out.println("Total box: " + box + "  box"); 
    }
     void hitungHarga(){
        int harga;
        harga = ((this.luas / (this.p * this.l)) / this.isibox) * this.harga;
        System.out.println("Total harga: " + harga + "  rupiah"); 
    }
}


