/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      movie_id: 2,
      review_text:
        'Post-Apocalyptic or Australia? The independent, Ozploitation film that would lay the framework for arguably the most influential post-apocalyptic film franchise of all time. It serves as the prime case study film for making an action movie on a bare-bones budget. The “post” in post-apocalyptic might be a bit of a stretch for this film with plot points and settings that feel out of place for the rest of the series, partly due to budget constraints. However, it delivers on the two most important aspects of Mad Max movies: boundary-pushing costume design (for people and cars) as well as adrenaline-pumping, automobile action scenes.',
      movie_rating: 4,
      reviewer_name: 'Anonymous',
    },
    {
      id: 2,
      movie_id: 2,
      review_text:
        'Main plot points are good but the setup & exposition are so aggressively brushed over that most of this feels illogical & unnatural. The set pieces, crashes, & car chases are enjoyable as a clear passion project with interesting world building.',
      movie_rating: 2,
      reviewer_name: 'Griffith J',
    },
    {
      id: 3,
      movie_id: 8,
      review_text:
        "It really could be better- it's a big slow and boring at times. But still, the topic at-hand and concept is entertaining enough to carry most of the movie.",
      movie_rating: 3,
      reviewer_name: 'Anonymous',
    },
    {
      id: 4,
      movie_id: 11,
      review_text:
        "Classic war film that ranks as one of the best ever produced, thanks to a top notch cast and direction that doesn't shy away from the harsher side of war. The actors are a who's who of stars, from Gregory Peck to David Niven to Anthony Quinn, all who shine in their roles and could have easily been the leads by themselves but actually make an epic ensemble. Behind the camera, director J. Lee Thompson crafts a first rate adventure epic, with plenty of brilliant action set pieces and exotic locations. However, what puts the movie really over is its willingness to show the darker side of war, from cold-blooded killings to using an injured colleague to further the mission. It's not preachy and one could argue the actions were necessary but the film doesn't glamorize war either. All in all, a first rate adventure film like no other.",
      movie_rating: 5,
      reviewer_name: 'Jonathon W',
    },
    {
      id: 5,
      movie_id: 15,
      review_text:
        'It was very simple and easy to watch. The actors were appealing and the story was an interesting version. I would recommend it for someone who just wants to relax and watch a movie about a time in the distant past.',
      movie_rating: 3,
      reviewer_name: 'Jackie S',
    },
  ])
}
