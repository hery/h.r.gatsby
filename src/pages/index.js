
import React from "react";
import Link from 'gatsby-link'

export default ({ data }) => {
    return (
        <div>
            {
                data.allMarkdownRemark.edges.map((node) => {
                    console.debug(node)
                    return (
                        <div>
                            <h3><Link to='/'>{ node.node.frontmatter.title }</Link><br />
                            { node.node.frontmatter.date }</h3>
                            <div dangerouslySetInnerHTML={{ __html: node.node.html }} />
                        </div>
                    )
                })
            }
        </div>
    )
};

export const query = graphql`
    query IndexQuery {
	allMarkdownRemark {
	  edges {
	    node {
	      frontmatter {
	        title
	        date
	      }
        excerpt
        timeToRead
        html
	    }
	  }
	}
  site {
    siteMetadata {
      title
    }
  }
}
`
