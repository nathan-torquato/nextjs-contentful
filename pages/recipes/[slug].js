import { contentfulClient } from "../../helpers"

export async function getStaticPaths() {

  const res = await contentfulClient.getEntries({
    content_type: 'recipe'
  })

  const paths = res.items.map(item => ({
    params: {
      slug: item.fields.slug,
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const { items } = await contentfulClient.getEntries({
    content_type: 'recipe',
    'fields.slug': slug
  })

  return {
    props: {
      recipe: items[0]
    }
  }
}

export default function RecipeDetails({ recipe }) {
  return (
    <div>
      Recipe Details
      <pre>{JSON.stringify(recipe, null, 2)}</pre>
    </div>
  )
}