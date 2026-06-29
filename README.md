# Web Development Project 4 - *Veni Vici*

Submitted by: **Allison Lee**

This web app: **Gives users the chance to discover a multitude of different cat breeds! If there's any features about the cat that you dislike, click on the feature to add it to the ban list, and only see cats of the features that are not banned.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [X] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [X] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [X] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [X<img width="480" height="334" alt="gif (3)" src="https://github.com/user-attachments/assets/4d4961e5-ff4c-431d-aaca-eb1ce8fc3a39" />
<img width="480" height="334" alt="gif (3)" src="https://github.com/user-attachments/assets/7450862a-b591-43f2-bb8c-cc5750e3ec45" />
] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [X] Multiple types of attributes are clickable and can be added to the ban list
- [X] Users can see a stored history of their previously displayed  results from this session
- [X] A dedicated section of the application displays all the previous images/attributes seen before
- [ ] Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<img width="480" height="334" alt="gif (3)" src="https://github.com/user-attachments/assets/b260da59-6633-431c-9d91-102116459e19" />

GIF created with ...  giphy.com

## Notes

The cat app is not originally what I started off with. I had intended to do a dog one with the dog api, but the api only provided links to the images in its json file, no traits. So I switched to NASA, but the image generator cut off at a low limit. The cat api is what I ended up with through manual searching. I had to list out the different cat breeds, since they couldn't be fetched, but all the other information is pulled with the cat breed's profile. The user is able to click "Find the next breed" button to display a new cat, and click on features to add to the ban list, or take it off the ban list. The history section also shows all the cats that had been previously displayed. 

## License

    Copyright [2026] [Allison Lee]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
