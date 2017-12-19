import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from 'Environment';

import Products from 'components/Main/Products';

const productsQuery = graphql`
  query ProductsContainerQuery {
    products {
      ...Products_products
    }
  }
`;

const products = {
  edges: [
    {
      node: {
        id: '5a2dd63bbc976b1888b4b41c',
        price: 200,
        parrot: {
          id: '5a2dd63bbc976b1888b4b40e',
          name: 'Sulphur-crested Cockatoo',
          description:
            'The Sulphur-crested Cockatoo is a large white parrot. It has a dark grey-black bill, a distinctive sulphur-yellow crest and a yellow wash on the underside of the wings. Sexes are similar, although the female can be separated at close range by its red-brown eye (darker brown in the male). This is a noisy and conspicuous cockatoo, both at rest and in flight. Young Sulphur-crested Cockatoos resemble the adults.'
        },
        supplier: {
          name: 'Parrots House',
          id: '5a2dd63bbc976b1888b4b41b'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b41d',
        price: 250,
        parrot: {
          id: '5a2dd63bbc976b1888b4b40e',
          name: 'Sulphur-crested Cockatoo',
          description:
            'The Sulphur-crested Cockatoo is a large white parrot. It has a dark grey-black bill, a distinctive sulphur-yellow crest and a yellow wash on the underside of the wings. Sexes are similar, although the female can be separated at close range by its red-brown eye (darker brown in the male). This is a noisy and conspicuous cockatoo, both at rest and in flight. Young Sulphur-crested Cockatoos resemble the adults.'
        },
        supplier: {
          name: 'Birdville',
          id: '5a2dd63bbc976b1888b4b41a'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b41e',
        price: 4500,
        parrot: {
          id: '5a2dd63bbc976b1888b4b415',
          name: 'Scarlet Macaw',
          description:
            'The scarlet macaw is a large red, yellow, and blue South American parrot, a member of a large group of Neotropical parrots called macaws. It is native to humid evergreen forests of tropical South America. Range extends from south-eastern Mexico to the Peruvian Amazon, Colombia, Bolivia, Venezuela and Brazil in lowlands up to 500 m up to 1,000 m.'
        },
        supplier: {
          name: 'Birkshire Birds Farm',
          id: '5a2dd63bbc976b1888b4b419'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b41f',
        price: 5000,
        parrot: {
          id: '5a2dd63bbc976b1888b4b415',
          name: 'Scarlet Macaw',
          description:
            'The scarlet macaw is a large red, yellow, and blue South American parrot, a member of a large group of Neotropical parrots called macaws. It is native to humid evergreen forests of tropical South America. Range extends from south-eastern Mexico to the Peruvian Amazon, Colombia, Bolivia, Venezuela and Brazil in lowlands up to 500 m up to 1,000 m.'
        },
        supplier: {
          name: 'Australia Macaws',
          id: '5a2dd63bbc976b1888b4b418'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b420',
        price: 3500,
        parrot: {
          id: '5a2dd63bbc976b1888b4b416',
          name: 'Yellow/Blue Macaw',
          description:
            'The blue-and-yellow macaw, also known as the blue-and-gold macaw, is a large South American parrot with blue top parts and yellow under parts. It is a member of the large group of neotropical parrots known as macaws. It inhabits forest (especially varzea, but also in open sections of terra firme or unflooded forest), woodland and savannah of tropical South America.'
        },
        supplier: {
          name: 'Australia Macaws',
          id: '5a2dd63bbc976b1888b4b418'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b421',
        price: 7000,
        parrot: {
          id: '5a2dd63bbc976b1888b4b414',
          name: 'Green-winged Macaw',
          description:
            'This is the largest of the Ara genus, widespread in the forests and woodlands of northern and central South America. However, in common with other macaws, in recent years there has been a marked decline in its numbers due to habitat loss and illegal capture for the parrot trade.'
        },
        supplier: {
          name: 'Australia Macaws',
          id: '5a2dd63bbc976b1888b4b418'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b422',
        price: 100000,
        parrot: {
          id: '5a2dd63bbc976b1888b4b413',
          name: 'Spix Macaw',
          description:
            'The bird is a medium-size parrot weighing about 300 grams (0.66 lb), smaller than most of the large macaws. Its plumage is various shades of blue, with a grey-blue head, light blue underparts, and vivid blue upperparts. Males and females are almost identical in appearance, however the females are slightly smaller on average.'
        },
        supplier: {
          name: 'Australia Macaws',
          id: '5a2dd63bbc976b1888b4b418'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b423',
        price: 200,
        parrot: {
          id: '5a2dd63bbc976b1888b4b411',
          name: 'Long-billed Corella',
          description:
            'The Long-billed Corella is a medium-sized white cockatoo with a short crest (not always visible) and short tail, stocky body and a distinctive long upper mandible to its bill. There is a faint yellowish wash on the undersides of its wings and tail, and orange-red splashes on its forehead, throat and an orange-red crescent across its upper breast. The eye ring is pale grey-blue. It is a conspicuous and gregarious species, often seen foraging in large flocks on the ground.'
        },
        supplier: {
          name: 'Birkshire Birds Farm',
          id: '5a2dd63bbc976b1888b4b419'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b424',
        price: 2000,
        parrot: {
          id: '5a2dd63bbc976b1888b4b412',
          name: 'Blue-eyed Cockatoo',
          description:
            'The blue-eyed cockatoo is a large, approximately 50 centimetres (20 in) long, mainly white cockatoo with a mobile crest, a black beak, and a light blue rim of featherless skin around each eye, that gives this species its name.'
        },
        supplier: {
          name: 'Birkshire Birds Farm',
          id: '5a2dd63bbc976b1888b4b419'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b425',
        price: 2500,
        parrot: {
          id: '5a2dd63bbc976b1888b4b412',
          name: 'Blue-eyed Cockatoo',
          description:
            'The blue-eyed cockatoo is a large, approximately 50 centimetres (20 in) long, mainly white cockatoo with a mobile crest, a black beak, and a light blue rim of featherless skin around each eye, that gives this species its name.'
        },
        supplier: {
          name: 'Birdville',
          id: '5a2dd63bbc976b1888b4b41a'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b426',
        price: 1750,
        parrot: {
          id: '5a2dd63bbc976b1888b4b412',
          name: 'Blue-eyed Cockatoo',
          description:
            'The blue-eyed cockatoo is a large, approximately 50 centimetres (20 in) long, mainly white cockatoo with a mobile crest, a black beak, and a light blue rim of featherless skin around each eye, that gives this species its name.'
        },
        supplier: {
          name: 'Parrots House',
          id: '5a2dd63bbc976b1888b4b41b'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b427',
        price: 3000,
        parrot: {
          id: '5a2dd63bbc976b1888b4b40f',
          name: 'Palm Cockatoo',
          description:
            'The palm cockatoo also known as the goliath cockatoo or great black cockatoo, is a large smoky-grey or black parrot of the cockatoo family native to New Guinea, Aru Islands, and Cape York Peninsula. It has a very large black beak and prominent red cheek patches.'
        },
        supplier: {
          name: 'Parrots House',
          id: '5a2dd63bbc976b1888b4b41b'
        }
      }
    },
    {
      node: {
        id: '5a2dd63bbc976b1888b4b428',
        price: 350,
        parrot: {
          id: '5a2dd63bbc976b1888b4b410',
          name: 'Galah',
          description:
            'The Galah can be easily identified by its rose-pink head, neck and underparts, with paler pink crown, and grey back, wings and undertail. Birds from the west of Australia have comparatively paler plumage. Galahs have a bouncing acrobatic flight, but spend much of the day sheltering from heat in the foliage of trees and shrubs. Huge noisy flocks of birds congregate and roost together at night.'
        },
        supplier: {
          name: 'Parrots House',
          id: '5a2dd63bbc976b1888b4b41b'
        }
      }
    }
  ]
};

export default class ProductsContainer extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={productsQuery}
        render={({ error, props }) => {
          const a = {
            products
          };
          return <Products {...a} />;
          // if (error) {
          //   return <div>{error.message}</div>;
          // } else if (props) {
          //   return <Products {...props} />;
          // }
          // return <div>Loading</div>;
        }}
      />
    );
  }
}