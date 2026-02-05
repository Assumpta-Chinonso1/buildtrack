import { Suspense } from "react";
import { Product } from "@/components/product";
import { Review } from "@/components/review";

export default function ProductReview() {
    return (
        <div>
            <h1>
                  Product Reviews
            </h1>
           
           
           <Suspense fallback={ <p> Loading Products details....</p> }>
                   <Product/>
           </Suspense>
            
            <Suspense fallback={ <p> Loading Review details....</p> }>
               <Review/>
            </Suspense>
            
        </div>
    )
}