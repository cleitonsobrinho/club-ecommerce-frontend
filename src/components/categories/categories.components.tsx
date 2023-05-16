import { useContext, useEffect } from 'react'
// Components
import { CategoryContext } from '../../contexts/category.context'
import CategoryItem from '../category-item/category-item'
import Loading from '../loading/loading.component'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.style'

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
        <CategoriesContainer>
          {isLoading && <Loading />}
            <CategoriesContent>
              {categories.map((category) => (
                <div key={category.id}>
                  <CategoryItem category={category} />
                </div>
              ))}
            </CategoriesContent>
        </CategoriesContainer>
  )
}

export default Categories
