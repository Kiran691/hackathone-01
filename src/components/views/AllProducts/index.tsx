"use client";
import { oneProductType } from "@/components/utils/ProductDataArrayAndTypes";
import { Component } from "react";


export default class AllProductsCompo extends Component<{ ProductData: Array<oneProductType>}> {
    getData=()=>{
        console.log(this.props.ProductData);
        
    }
    render(){
        return(
            
         <div onClick={this.getData}>asdf</div>
        )
    }
   
    }
    
    
   
    
