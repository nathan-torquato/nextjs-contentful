import Link from 'next/link'
import Image from 'next/image'

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          height={thumbnail.fields.file.details.image.height}
          width={thumbnail.fields.file.details.image.width}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Takes aprox {cookingTime}min to make</p>
        </div>
      </div>
      <div className="actions">
        <Link href={`/recipes/${slug}`}>
          <a>Cook this</a>
        </Link>
      </div>
    </div>
  )
}

export default RecipeCard
