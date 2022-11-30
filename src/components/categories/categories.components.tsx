import { useEffect, useState } from 'react'
import axios from 'axios'

// Components
import CategoryItem from '../category-item/category-item'
// Utilities
import Category from '../../types/category.types'
import env from '../../config/env.config'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.style'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/category`)

      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
        <CategoriesContainer>
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
