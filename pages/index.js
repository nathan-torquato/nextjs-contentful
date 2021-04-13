import RecipeCard from '../components/RecipeCard'
import { contentfulClient } from '../helpers'

export async function getStaticProps() {
  const res = await contentfulClient.getEntries({
    content_type: 'recipe'
  })

  return {
    props: {
      recipes: res.items
    }
  }
}

export default function Recipes({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}

      <style jsx>{`
        .recipe-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          grid-gap: 20px 60px;
        }
      `}</style>
    </div>
  )
}