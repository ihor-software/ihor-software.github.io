import React, { useState } from 'react';
import CardList from '../Components/CardListComponent';
import FooterComponent from '../Components/FooterComponent';
import products from '../files/products.json';

function ProductsPage() {
    return (
    <div class="container">
        <CardList projects={products} />
        <FooterComponent />
    </div>
    );
}

export default ProductsPage;