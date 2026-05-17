import { useState, useEffect } from 'react';

const artworks = [
  {
    id: 1,
    title: 'Desert Silence',
    artist: 'Layla Al-Rashid',
    year: 2024,
    style: 'Abstract',
    mood: 'Calm',
    description: 'A meditative exploration of warm ochres and deep shadow.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800',
    accent: '#C8974A',
  },
  {
    id: 2,
    title: 'Neon Meridian',
    artist: 'Tariq Osman',
    year: 2023,
    style: 'Digital',
    mood: 'Bold',
    description: 'Electric cityscapes collide with ancient geometry.',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=800',
    accent: '#4AE3C8',
  },
  {
    id: 3,
    title: 'Woven Memory',
    artist: 'Noor Khalifa',
    year: 2024,
    style: 'Textile',
    mood: 'Nostalgic',
    description: 'Fragments of childhood woven into abstract textile patterns.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
    accent: '#E86A92',
  },
  {
    id: 4,
    title: 'Iron Garden',
    artist: 'Samir Al-Hadi',
    year: 2022,
    style: 'Sculpture',
    mood: 'Bold',
    description: 'Industrial forms bloom into floral structures.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    accent: '#7A8CFF',
  },
  {
    id: 5,
    title: 'Blue Tide',
    artist: 'Amira Hassan',
    year: 2024,
    style: 'Painting',
    mood: 'Calm',
    description: 'Layers of cerulean and indigo create undulating wave forms.',
    image: 'https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?w=800',
    accent: '#4A8FE8',
  },
  {
    id: 6,
    title: 'Fractured Self',
    artist: 'Yusuf Al-Amin',
    year: 2023,
    style: 'Abstract',
    mood: 'Dramatic',
    description: 'Identity fragmented through shattered mirror motifs.',
    image: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=800',
    accent: '#FF6B35',
  },
];
const artists = [
  {
    id: 1,
    name: 'Layla Al-Rashid',
    specialty: 'Abstract Art',
    bio: 'Contemporary artist inspired by desert landscapes and modern minimalism.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
    accent: '#C8974A'
  },
  {
    id: 2,
    name: 'Tariq Osman',
    specialty: 'Digital Futurism',
    bio: 'Creates immersive futuristic environments blending neon and architecture.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    accent: '#4AE3C8'
  },
  {
    id: 3,
    name: 'Noor Khalifa',
    specialty: 'Textile & Memory',
    bio: 'Explores nostalgia through layered textures and woven compositions.',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800',
    accent: '#E86A92'
  },
  {
    id: 4,
    name: 'Samir Al-Hadi',
    specialty: 'Industrial Sculpture',
    bio: 'Transforms industrial materials into elegant sculptural installations.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    accent: '#7A8CFF'
  },
  {
    id: 5,
    name: 'Amira Hassan',
    specialty: 'Oceanic Painting',
    bio: 'Her paintings explore movement, serenity, and emotional depth through color.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
    accent: '#4A8FE8'
  },
  {
    id: 6,
    name: 'Yusuf Al-Amin',
    specialty: 'Experimental Abstract',
    bio: 'Focuses on fractured identity and emotional expression through abstract forms.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    accent: '#FF6B35'
  }
]
// Filter options used by the Explore page
const styles = ['All', 'Abstract', 'Painting', 'Digital', 'Sculpture', 'Textile'];
const moods = ['All', 'Calm', 'Bold', 'Nostalgic', 'Dramatic']

export default function App() {
  //  Which page is currently visible 
  const [page, setPage] = useState('gallery');
  //  The artwork the user clicked on (for the detail page) 
  const [selected, setSelected] = useState(null);
  //  Controls the fade-in animation on load 
  const [loaded, setLoaded] = useState(false);
  //  Active filter values on the Explore page 
  const [filterStyle, setFilterStyle] = useState('All');
  const [filterMood, setFilterMood] = useState('All');

  const [selectedArtist, setSelectedArtist] = useState(null);
  //  Filtered artworks: recalculates when filters change 
  const filtered = artworks.filter(art => {
    const styleOk = filterStyle === 'All' || art.style === filterStyle;
    const moodOk = filterMood === 'All' || art.mood === filterMood;
    return styleOk && moodOk;
  });
  //  Trigger the page fade-in animation after first render 
  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);
  //  Navigation helpers 
  function openArtwork(art) {
    setSelected(art);
    setPage('detail');
  }
  function goBack() {
    setSelected(null);
    setPage('gallery');
  }
  return (
    <div className='page-content'>
      {/*  FIXED HEADER  */}
      <header className='header'>
        {/* Logo — clicking returns to gallery */}
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => { setPage('gallery'); setSelected(null); }}
        >
          <div style={{ fontSize: 14, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            MASHAN
          </div>
          <div style={{
            fontSize: 9, letterSpacing: '0.3em', color: 'var(--gold)',
            textTransform: 'uppercase'
          }}>
            Digital Art Gallery
          </div>
        </div>
        {/* Navigation links */}
        <nav style={{ display: 'flex', gap: '32px' }}>
          <span
            className={page === 'gallery' ? 'nav-link active' : 'nav-link'}
            onClick={() => { setPage('gallery'); setSelected(null); }}
          >
            Gallery
          </span>
          <span
            className={page === 'explore' ? 'nav-link active' : 'nav-link'}
            onClick={() => setPage('explore')}
          >
            Explore
          </span>
          <span
            className={page === 'artists' ? 'nav-link active' : 'nav-link'}
            onClick={() => setPage('artists')}
          >
            Artists
          </span>
        </nav>
        <div style={{ fontSize: 10, color: '#444' }}>
          {artworks.length} Works
        </div>
      </header>

      {/*  PAGE: GALLERY  */}
      {page === 'gallery' && (
        <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.7s ease' }}>
          {/* Hero Section */}
          <section style={{
            padding: '110px 40px 90px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>

            <div className='hero-glow' />

            <div style={{
              fontSize: '11px',
              letterSpacing: '0.45em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '22px'
            }}>
              Luxury Collection 2026
            </div>

            <h1 style={{
              fontSize: 'clamp(58px, 9vw, 120px)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,

              background: 'linear-gradient(to right, #ffffff, #C8974A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Digital
              <br />
              Art Gallery
            </h1>

            <p style={{
              marginTop: '32px',
              fontSize: '16px',
              color: 'var(--muted)',
              maxWidth: '540px',
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              A curated experience where contemporary digital art,
              immersive storytelling, and luxury aesthetics converge.
            </p>

            <div style={{
              display: 'flex',
              gap: '18px',
              marginTop: '40px',
              flexWrap: 'wrap'
            }}>

              <button style={{
                padding: '14px 28px',
                borderRadius: '999px',
                border: 'none',
                background: 'linear-gradient(135deg, #C8974A, #E7B76A)',
                color: '#0A0A0F',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '12px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                boxShadow: '0 15px 40px rgba(200,151,74,0.25)'
              }}>
                Explore Collection
              </button>

              <button
                onClick={() => setPage('artists')}
                style={{
                  padding: '14px 28px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase'
                }}>
                View Artists
              </button>
            </div></section>{/* Artwork Grid */}
          <div className='grid'>
            {artworks.map((art, index) => (
              <div
                key={art.id}
                className='art-card'
                onClick={() => openArtwork(art)}
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(32px)',
                  transition: `opacity 0.6s ease ${index * 0.08}s,
                  transform 0.6s ease ${index * 0.08}s`,
                }}
              >
                <img src={art.image} alt={art.title} />
                <div className='overlay'>
                  <span className='tag' style={{
                    color: art.accent,
                    borderColor: art.accent, marginBottom: '8px', width: 'fit-content'
                  }}>
                    {art.style}
                  </span>
                  <div style={{ fontSize: '18px', fontWeight: 300 }}>{art.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '4px' }}>
                    {art.artist} · {art.year}
                  </div>
                </div>
                <div className='card-footer'>
                  <div>
                    <div style={{ fontSize: '13px' }}>{art.title}</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted)' }}>{art.artist}</div>
                  </div>
                  <span style={{ color: 'var(--muted)' }}>&#8594;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
      }
      {/*  END GALLERY PAGE  */}

      {/*  PAGE: DETAIL  */}
      {
        page === 'detail' && selected && (
          <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 40px' }}>
            <button className='btn-back' onClick={goBack}>
              &#8592; Back to Gallery
            </button>
            {/* Two-column grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
              {/* LEFT: Sticky image column */}
              <div style={{ position: 'sticky', top: '88px', alignSelf: 'start' }}>
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px',
                  boxShadow: `0 20px 60px ${selected.accent}22`
                }}>
                  <img src={selected.image} alt={selected.title}
                    style={{
                      width: '100%', display: 'block', objectFit: 'cover',
                      maxHeight: '560px'
                    }} />
                  {/* Colored accent bar under image */}
                  <div style={{ height: '3px', background: selected.accent }} />
                </div>
                {/* Metadata strip below image */}
                <div style={{
                  display: 'flex', gap: '32px', padding: '14px 20px',
                  background: 'var(--card-bg)', border: '1px solid var(--border)'
                }}>
                  <div>
                    <div style={{
                      fontSize: '9px', color: '#444', textTransform: 'uppercase'
                    }}>Style</div>
                    <div style={{ fontSize: '12px', color: selected.accent }}>{selected.style}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase' }}>Mood</div>
                    <div style={{ fontSize: '12px' }}>{selected.mood}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '9px', color: '#444', textTransform: 'uppercase' }}>Year</div>
                    <div style={{ fontSize: '12px' }}>{selected.year}</div>
                  </div>
                </div>
              </div>
              {/* RIGHT: Text column */}
              <div style={{ paddingTop: '20px' }}>
                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300,
                  letterSpacing: '-0.02em', lineHeight: 1.05
                }}>
                  {selected.title}
                </h2>
                {/* Gold accent line */}
                <div style={{
                  height: '2px', background: selected.accent,
                  width: '40px', margin: '12px 0'
                }} />
                <div style={{
                  fontSize: '13px', color: 'var(--muted)',
                  fontStyle: 'italic', marginBottom: '36px'
                }}>
                  by {selected.artist}
                </div>
                {/* Description with left border */}
                <p style={{
                  fontSize: '16px', lineHeight: 1.8, color: '#AAA',
                  fontStyle: 'italic',
                  borderLeft: `2px solid ${selected.accent}`,
                  paddingLeft: '20px', marginBottom: '48px'
                }}>
                  {selected.description}
                </p>
                {/* Tags */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Contemporary', selected.style, selected.mood].map(tag => (
                    <span key={tag} className='tag'
                      style={{ color: selected.accent, borderColor: selected.accent }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/*  END DETAIL PAGE  */}

      {/*  PAGE: EXPLORE  */}
      {
        page === 'explore' && (
          <div>
            {/* Page header */}
            <section style={{
              padding: '60px 40px 40px', borderBottom: '1px solid var(--border)'
            }}>
              <div style={{
                fontSize: '10px', letterSpacing: '0.4em', color: 'var(--gold)',
                textTransform: 'uppercase', marginBottom: '12px'
              }}>
                Discover
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 300 }}>
                Explore the Collection
              </h2>
            </section>
            {/* Filter buttons */}
            <section style={{
              padding: '28px 40px', borderBottom: '1px solid var(--border)',
              display: 'flex', flexWrap: 'wrap', gap: '24px'
            }}>
              {/* Style filters */}
              <div>
                <div style={{
                  fontSize: '9px', letterSpacing: '0.25em', color: '#444',
                  textTransform: 'uppercase', marginBottom: '10px'
                }}>Style</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {styles.map(s => (
                    <button
                      key={s}
                      className={filterStyle === s ? 'filter-pill active' : 'filter-pill'}
                      onClick={() => setFilterStyle(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              {/* Mood filters */}
              <div>
                <div style={{
                  fontSize: '9px', letterSpacing: '0.25em', color: '#444',
                  textTransform: 'uppercase', marginBottom: '10px'
                }}>Mood</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {moods.map(m => (
                    <button
                      key={m}
                      className={filterMood === m ? 'filter-pill active' : 'filter-pill'}
                      onClick={() => setFilterMood(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </section>
            {/* Results grid */}
            <section style={{ padding: '40px' }}>
              {filtered.length === 0 ? (
                <p style={{
                  textAlign: 'center', padding: '80px 0',
                  color: '#444', fontStyle: 'italic'
                }}>
                  No works match these filters.
                </p>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '24px'
                }}>
                  {filtered.map(art => (
                    <div key={art.id} className='art-card'
                      onClick={() => openArtwork(art)}
                      style={{ border: '1px solid var(--border)' }}>
                      <img src={art.image} alt={art.title}
                        style={{ height: '200px' }} />
                      <div className='overlay' />
                      <div style={{ padding: '18px 20px' }}>
                        <div style={{ fontSize: '15px', fontWeight: 300 }}>{art.title}</div>
                        <div style={{
                          fontSize: '11px', color: 'var(--muted)',
                          fontStyle: 'italic', marginTop: '3px'
                        }}>
                          {art.artist}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )
      }
      {/*  END EXPLORE PAGE  */}
      {/*  PAGE: ARTISTS  */}
      {page === 'artists' && (
        <div>
          <section style={{
            padding: '90px 40px 60px',
            borderBottom: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div style={{
              fontSize: '11px',
              letterSpacing: '0.4em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Creative Minds
            </div>
            <h2 style={{
              fontSize: 'clamp(42px, 7vw, 88px)',
              fontWeight: 300,
              lineHeight: 0.95
            }}>
              Featured Artists
            </h2>
            <p style={{
              marginTop: '24px',
              color: 'var(--muted)',
              maxWidth: '580px',
              lineHeight: 1.8,
              fontStyle: 'italic'
            }}>
              Discover visionary artists shaping the future of digital
              contemporary art.
            </p>
          </section>
          <section style={{
            padding: '50px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {artists.map(artist => (
              <div
                key={artist.id}
                onClick={() => {
                  setSelectedArtist(artist)
                  setPage('artist-detail')
                }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: '0.4s ease',
                  backdropFilter: 'blur(14px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.25)'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={artist.image}
                    alt={artist.name}
                    style={{
                      width: '100%',
                      height: '420px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85),transparent 60%)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px'
                  }}>
                    <div style={{
                      fontSize: '13px',
                      color: artist.accent,
                      marginBottom: '6px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase'
                    }}>
                      {artist.specialty}
                    </div>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: 300
                    }}>
                      {artist.name}
                    </div>
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                    fontSize: '14px'
                  }}>
                    {artist.bio}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}
      {/*  END ARTISTS PAGE  */}
      {/*  PAGE: ARTIST DETAIL  */}
      {page === 'artist-detail' && selectedArtist && (
        <div style={{
          padding: '80px 40px',
          maxWidth: '1300px',
          margin: '0 auto'
        }}>
          <button className='btn-back' onClick={() => setPage('artists')}>
            ← Back to Artists
          </button>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                style={{
                  width: '100%',
                  borderRadius: '32px',
                  display: 'block',
                  boxShadow: `0 30px 90px ${selectedArtist.accent}33`
                }}
              />
            </div>
            <div>
              <div style={{
                color: selectedArtist.accent,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontSize: '12px',
                marginBottom: '18px'
              }}>
                Featured Artist
              </div>
              <h2 style={{
                fontSize: 'clamp(48px, 7vw, 96px)',
                fontWeight: 300,
                lineHeight: 0.95
              }}>
                {selectedArtist.name}
              </h2>
              <div style={{
                marginTop: '18px',
                fontSize: '18px',
                color: selectedArtist.accent,
                fontStyle: 'italic'
              }}>
                {selectedArtist.specialty}
              </div>
              <p style={{
                marginTop: '32px',
                lineHeight: 2,
                color: 'var(--muted)',
                fontSize: '16px'
              }}>
                {selectedArtist.bio}
              </p>
              <div style={{
                marginTop: '40px',
                display: 'flex',
                gap: '14px',
                flexWrap: 'wrap'
              }}>
                <span className='tag' style={{
                  color: selectedArtist.accent,
                  borderColor: selectedArtist.accent
                }}>
                  Contemporary
                </span>
                <span className='tag' style={{
                  color: selectedArtist.accent,
                  borderColor: selectedArtist.accent
                }}>
                  Luxury Art
                </span>
                <span className='tag' style={{
                  color: selectedArtist.accent,
                  borderColor: selectedArtist.accent
                }}>
                  Digital Gallery
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* END ARTIST DETAIL PAGE  */}
    </div>
  );
} {/* closes export default function App() */ }