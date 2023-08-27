import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import { oneProductType } from "@/components/utils/ProductDataArrayAndTypes";
import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../Card";
import Link from "next/link";

interface propsType {
  ProductsArray: any;
}

// export default class  extends Component <{ProductData: propsType}>
// {
//     start:number = 0
//     end: number = 20
//     state: {items:Array<oneProductType>,hasMore:boolean} ={
//         items:[...this.props.ProductData.productArray],
//         hasMore:true,
//     }
//     fetchDataFromApiGradually = async(start:number, end:number)=>{
//      const res = await fetch(`${BASE_PATH_FORAPI}/api/products?start=${start}&end=${end}`);
//      const dataToCheckAndSend = await res.json()
//      if (dataToCheckAndSend.productArray === "Not Found"){
//       this.setState({ hasMore: false})

//      }
//      return dataToCheckAndSend;

//     }
//     getData = async() =>{
//     let allTogether = await this.fetchDataFromApiGradually(this.start, this.end)
//     if (allTogether.productArray !== "Not Found"){
//        this.setState({
//       items: this.state.items.concat(allTogether.productArray)
//     })
//   } else {
//     this.setState({
//       hasMore: false
//     })
//   }
//     this.start= this.start + 10
//     this.end= this.end + 10
//         // console.log(this.props.ProductData.productArray[0].price)

//     }
//     render(){
//       console.log("===>",this.props.ProductData.productArray);

//         return(
//           <div></div>
//           //       <InfiniteScroll
//           //   dataLength={this.state.items.length}
//           //   next={this.getData}
//           //   hasMore={this.state.hasMore}
//           //   loader={<h4>Loading...</h4>}
//           //   endMessage={
//           //     <p style={{ textAlign: 'center' }}>
//           //       <b>Yay! You have seen it all</b>
//           //     </p>
//           //   }
//           // className="grid grid-cols-1 md:grid-cols-2 content-center justify-center lg:grid-cols-3 gap-4 py-10"
//           // >

//           //   {this.state.items.map((items:oneProductType, index:number)=>(
//           //     <Card singleProductData={items} key={" "} />
//           //   )
//           //   )}
//           // </InfiniteScroll>

//         )
//     }
// }

export default async function AllProductsCompo({ ProductsArray }: propsType) {
  // Empty page when no products on sanity
  if (ProductsArray.length == 0) {
    return <div>No Product</div>;
  }
  console.log("==>", ProductsArray.productArray);

  return (
    <div className="mx-auto flex max-w-[1560px] flex-wrap justify-center gap-5 px-5 py-12 sm:px-10 md:px-16 lg:px-20">
      {ProductsArray.productArray.map((prod: any, ind: number) => (
        <Link
          href={`/products/${prod.slug.current}`}
          className="cursor-pointer"
          key={ind}
        >
          {/*           
     <Product
            name={prod.name}
            price={prod.price}
            imgUrl={urlForImage(prod.image[0]).width(400).url()}
            type={prod.type}
            catlog={true}
          /> */}
          <div className="">
            <h2 className="mt-2 text-lg font-semibold">{prod.productName}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
