import {NextPageWithLayout} from "@/pages/_app";
import {ReactElement} from "react";
import SidebarLayout from "@/components/SidebarLayout";
import Category from "@/models/category.model";
import ListItem from "@/models/listItem.model";
import {mockCategories, mockCurrencies} from "@/constants/mockData";
import Currency from "@/models/currency.model";
import {useForm} from "react-hook-form";

const CreateProduct: NextPageWithLayout = () => {
  const {register, handleSubmit, setError, formState: {errors}} = useForm()

  const categories: ListItem<Category>[] = mockCategories.map((category) => {
    return {
      label: category.title,
      value: category
    }
  });

  const currencies: ListItem<Currency>[] = mockCurrencies.map((value) => {
    return {
      label: value.currency,
      value
    }
  });

  const onFormSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <div>
      <form className="w-7/12 rounded-lg mx-auto my-8 py-8 px-12 border"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <fieldset>
          <div className="grid grid-cols-12 my-4">
            <label htmlFor="productName"
              className="col-span-4 font-semibold text-slate-600"
            >
              Product Name :
            </label>
            <div className="col-span-8">
              <input
                type="text"
                id="productName"
                className={`w-full rounded px-2 ${errors.productName ? 'border border-primaryColor focus:outline-primaryColor' : 'border focus:outline-slate-300'}`}
                aria-label="Product Name"
                {...register("productName", {
                  required: true
                })}
              />
              {
                errors.productName && (
                  <div className="text-primaryColor text-sm font-semibold">*This field is required</div>
                )
              }
            </div>
          </div>
          <div className="grid grid-cols-12 my-4">
            <label htmlFor="description"
                   className="col-span-4 font-semibold text-slate-600"
            >
              Description :
            </label>
            <div className="col-span-8">
              <input
                type="text"
                id="description"
                className={`w-full rounded px-2 ${errors.description ? 'border border-primaryColor focus:outline-primaryColor' : 'border focus:outline-slate-300'}`}
                aria-label="Description"
                {...register("description", {
                  required: true
                })}
              />
              {
                errors.description && (
                  <div className="text-primaryColor text-sm font-semibold">*This field is required</div>
                )
              }
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-12">
              <label htmlFor="price"
                     className="col-span-4 font-semibold text-slate-600"
              >
                Price :
              </label>
              <div className="col-span-8">
                <input
                  type="number"
                  step=".001"
                  id="price"
                  className={`w-full rounded px-2 ${errors.price ? 'border border-primaryColor focus:outline-primaryColor' : 'border focus:outline-slate-300'}`}
                  aria-label="Price"
                  {...register("price", {
                    required: true
                  })}
                />
                {
                  errors.price && (
                    <div className="text-primaryColor text-sm font-semibold">*This field is required</div>
                  )
                }
              </div>
            </div>
            <div className="grid grid-cols-12">
              <label htmlFor="currency"
                     className="col-span-4 font-semibold text-slate-600"
              >
                Currency :
              </label>
              <div className="col-span-8">
                <select id="currency"
                        className={`w-full rounded px-2 ${errors.currency ? 'border border-primaryColor focus:outline-primaryColor' : 'border focus:outline-slate-300'}`}>
                  {
                    currencies.map((currency) => (
                      <option key={currency.value.code} value={currency.value.code}
                        className="hover:bg-none"
                      >
                        {currency.label}
                      </option>
                    ))
                  }
                </select>
                {
                  errors.currency && (
                    <div className="text-primaryColor text-sm font-semibold">*This field is required</div>
                  )
                }
              </div>
            </div>
          </div>
        </fieldset>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

CreateProduct.getLayout = function getLayout(page: ReactElement) {
  return (
    <SidebarLayout>
      {page}
    </SidebarLayout>
  )
}

export default CreateProduct;
