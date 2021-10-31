import Head from 'next/head'
import DarkToggle from '@/components/DarkToggle'
import Layout from '@/components/Layout'
import Card from '@/components/Card'

const FeaturedProducts = [
  {
      title: "Chhath Theme Based Tshirt (Hindi)",
      price: "400",
      cost: "800",
      off: "50",
      imageSrc: "products/t-shirt-festival.jpeg",
      sizes:[{size:'S'},{size:'M'},{size:'XXL'},],

  },
  {
      title: "Chhath Theme Based Tshirt (Hindi) 1",
      price: "400",
      cost: "800",
      off: "50",
      imageSrc: "products/t-shirt-festival.jpeg",
      sizes:[{size:'S'},{size:'L'},{size:'XL'},],
  },
  {
      title: "Chhath Theme Based Tshirt (Hindi) 2",
      price: "400",
      cost: "800",
      off: "50",
      imageSrc: "products/t-shirt-festival.jpeg",
      sizes:[{size:'S'},{size:'M'},{size:'XXL'},],

  },
  {
      title: "Chhath Theme Based Tshirt (Hindi) 3",
      price: "400",
      cost: "8000",
      off: "520",
      imageSrc: "products/t-shirt-festival.jpeg",
      sizes:[{size:'S'},{size:'L'},{size:'XL'},],
  },
  {
      title: "Chhath Theme Based Tshirt (Hindi) 20",
      price: "400",
      cost: "800",
      off: "50",
      imageSrc: "products/t-shirt-festival.jpeg",
      sizes:[{size:'S'},{size:'M'},{size:'XXL'},],

  },
  {
      title: "Chhath Theme Based Tshirt (Hindi) 30",
      price: "400",
      cost: "800",
      off: "50",
      imageSrc: "products/t-shirt-festival.jpeg",
      sizes:[{size:'S'},{size:'L'},{size:'XL'},],
  },
]

export default function Home(props:any) {
  return (
    <>
    <Layout>
      <div className="grid grid-cols-12  gap-x-6 gap-y-8 p-2 lg:p-12">
      {FeaturedProducts.map((item: any) => (
        <>
          <Card {...item}/>
        </>
      ))}
      </div>
    </Layout>
    </>
  )
}
