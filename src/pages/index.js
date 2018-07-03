
import React from "react";
import Link from 'gatsby-link'
import g from "glamorous";

import { rhythm } from "../utils/typography";

export default ({ data }) => {
    return (
        <div>
            {
                data.allMarkdownRemark.edges.map(({ node }, index) => {
                    return (
                        <div key={index}>
                            <Link to={node.fields.slug} css={{ textDecoration: `none`, color: `inherit` }} >
                                <g.H3 marginBottom={rhythm(1 / 4)}>
                                    {node.frontmatter.title}{" "}
                                     <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
                                </g.H3>
                                <p>
                                    {node.excerpt}
                                </p>
                            </Link>
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
        fields {
        slug
        }
        excerpt
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
