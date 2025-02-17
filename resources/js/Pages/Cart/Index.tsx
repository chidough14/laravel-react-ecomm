import CartItem from "@/Components/CartItem"
import CurrencyFormatter from "@/Components/CurrencyFormatter"
import PrimaryButton from "@/Components/PrimaryButton"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import { GroupedCartItems, PageProps } from "@/types"
import { Head, Link } from "@inertiajs/react"


const Index = ({
  csrf_token,
  cartItems,
  totalQuantity,
  totalPrice
}: PageProps<{ cartItems: Record<number, GroupedCartItems> }>) => {

  return (
    <AuthenticatedLayout>
      <Head title="Your Cart" />

      <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-4">
        <div className="card flex-1 bg-white dark:bg-gray-800 order-2 lg:order-1">
          <div className="card-body">
            <h2 className="text-lg font-bold">
              Shopping Cart
            </h2>

            <div className="my-4">
              {
                Object.keys(cartItems).length === 0 && (
                  <div>
                    You do noy have any items left
                  </div>
                )
              }
              {
                Object.values(cartItems).map((item) => (
                  <div key={item.user.id}>
                    <div className="flex items-center justify-between pb-4 border-b border-gray-300 mb-4">
                      <Link href="/" className="underline">
                        {item.user.name}
                      </Link>

                      <div>
                        <form action={route('cart.checkout')} method="post">
                          <input type="hidden" name="_token" value={csrf_token} />
                          <input type="hidden" name="vendor_id" value={item.user.id} />

                          <button className="btn btn-sm btn-ghost">
                            {/* <CreditCardIcon className="size-6" /> */}
                            Pay only for this seller
                          </button>
                        </form>
                      </div>
                    </div>

                    {
                      item.items.map((a) => (
                        <CartItem item={a} key={a.id} />
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="card bg-white dark:bg-gray-800 lg:min-w-[260px] order-1 lg:order-2">
          <div className="card-body">
            Subtotal: ({totalQuantity} items)
            <CurrencyFormatter amount={totalPrice} />

            <form action={route('cart.checkout')} method="post">
              <input type="hidden" name="_token" value={csrf_token} />

              <PrimaryButton className="rounded-full">
                {/* <CreditCardIcon className="size-6" /> */}
                Proceed to checkout
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Index