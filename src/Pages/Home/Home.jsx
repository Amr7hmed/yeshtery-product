import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import Proudect from '../Product/Product';
import Footer from '../../Components/Footer/Footer';
import { Getprodects } from '../../Services/Getprodectsapi';
import Cart from '../../Components/Cart/Cart.jsx';

export class Home extends Component {
    
    state = {
        Proudects: [...Getprodects.data],
        cart:[],
        idcart:"close-cartcomponent",
    }
    

    // Add Cart

    addCart=(id)=>{
        const check = this.state.cart.every(item=>{
            return item.id !== id
        })
        if(check){
            const data = this.state.Proudects.filter(product=>{
                return product.id === id;
            })
            this.setState({cart:[...this.state.cart,...data]})
        } else {
            alert('The Product Has Been Added To Cart !')
        }
        console.log(id)
    };

    
    // Open && Close Cart Component 
    
    cartToggole=()=>{
            if(this.state.idcart==="open-cartcomponet"){
                this.setState({
                    idcart:"close-cartcomponent"
                })
            }else{
                this.setState({
                    idcart:"open-cartcomponet"
                })
            }
        };

    // Remove Proudect 
    
    removeProudect=(id) =>{
        if(window.confirm("Do You Want To Delete This Product ?")){
            this.state.cart.forEach((item,index)=>{
                if(item.id===id){
                    this.state.cart.splice(index,1)
                }
            }) 
            this.setState({cart:[...this.state.cart]})
        }
    }

    render() {
        return (<div className="home">

                <Navbar cart={this.state.cart}
                 cartToggole={this.cartToggole}/>

                <Proudect Proudects={this.state.Proudects} addCart={this.addCart}/>

                <Footer/>
                
                <Cart cart={this.state.cart}
                 cartToggole={this.cartToggole} 
                 idcart={this.state.idcart} 
                 removeProudect={this.removeProudect}/>

            </div> 
        )}
}

export default Home;
