
import React from "react";

export default ({ data }) => (
    <div>
        <h1>Hai { data.site.siteMetadata.title }!</h1>
        <p>Der!</p>
    </div>
);

export const query = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`