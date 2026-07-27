/**
 * Author: Paurav Shah & Nimish Shah
 * Date: 2026-07-27
 * Version: 1.4.0
 * License: MIT
 * 
 * Artist Fine Art Gallery Page - Nimish Shah
 */

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { 
  FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, 
  FaMagnifyingGlass, FaXmark, FaPalette, 
  FaExpand, FaCompress, FaPlay, FaPause, FaChevronLeft, FaChevronRight, 
  FaShareNodes, FaSliders, FaArrowUp, FaEye, FaFilter, FaDownload, 
  FaStar, FaBorderAll, FaList, FaGrip
} from "react-icons/fa6";

// Dynamically import Navbar with SSR disabled to match index.js
const Navbar = dynamic(() => import('./navbar'), {
  ssr: false,
});

// Comprehensive Dataset for Paintings from public/Paintings
const PAINTINGS_DATA = [
  {
    id: 1,
    src: "./Paintings/painting_1.jpg",
    title: "Celestial Awakening",
    category: "Abstract",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: "2024",
    caption: "A vibrant explosion of cosmic blues and molten gold, exploring the balance between order and chaotic dynamic emotion.",
    tags: ["Abstract", "Oil", "Cosmic", "Gold Leaf"]
  },
  {
    id: 2,
    src: "./Paintings/painting_2.jpg",
    title: "Golden Hour Reverie",
    category: "Landscape",
    medium: "Acrylic & Palette Knife",
    dimensions: "30\" x 40\"",
    year: "2023",
    caption: "Textured impasto layers capturing the shimmering warm sunlight filtering through an autumn horizon.",
    tags: ["Landscape", "Impasto", "Warm Tones"]
  },
  {
    id: 3,
    src: "./Paintings/painting_3.jpg",
    title: "Whispering Waters",
    category: "Nature & Wildlife",
    medium: "Oil on Linen",
    dimensions: "24\" x 36\"",
    year: "2023",
    caption: "Subtle turquoise and emerald hues blending into deep indigo, capturing the fluid stillness of a secluded forest stream.",
    tags: ["Nature", "Water", "Serene", "Emerald"]
  },
  {
    id: 4,
    src: "./Paintings/painting_4.jpg",
    title: "Urban Nocturne",
    category: "Modern Art",
    medium: "Mixed Media & Acrylic",
    dimensions: "40\" x 40\"",
    year: "2024",
    caption: "Architectural geometry intersected by neon reflections and deep graphite shadows, evoking city night vibrations.",
    tags: ["Urban", "Modern", "Geometry", "Night"]
  },
  {
    id: 5,
    src: "./Paintings/painting_5.jpg",
    title: "Silent Contemplation",
    category: "Portrait",
    medium: "Oil on Wood Panel",
    dimensions: "20\" x 24\"",
    year: "2022",
    caption: "An intimate figurative study highlighting subtle light play, emotional depth, and classical chiaroscuro technique.",
    tags: ["Portrait", "Chiaroscuro", "Emotional", "Classical"]
  },
  {
    id: 6,
    src: "./Paintings/painting_6.jpg",
    title: "Symphony in Crimson",
    category: "Expressionism",
    medium: "Oil & Cold Wax",
    dimensions: "36\" x 36\"",
    year: "2024",
    caption: "Passionate expressive strokes of ruby crimson, magenta, and raw umber evoking raw energy and rhythmic movement.",
    tags: ["Expressionism", "Crimson", "Dynamic", "Wax"]
  },
  {
    id: 7,
    src: "./Paintings/painting_7.jpg",
    title: "Mist Over Solitude",
    category: "Landscape",
    medium: "Watercolor & Gouache",
    dimensions: "18\" x 24\"",
    year: "2021",
    caption: "Atmospheric wash of atmospheric greys and soft sage green depict mountain ridges shrouded in morning fog.",
    tags: ["Atmospheric", "Mountains", "Fog", "Minimalist"]
  },
  {
    id: 8,
    src: "./Paintings/painting_8.jpg",
    title: "Prismatic Horizon",
    category: "Abstract",
    medium: "Acrylic on Canvas",
    dimensions: "30\" x 48\"",
    year: "2023",
    caption: "Horizontal spectral gradients blending effortlessly to evoke sunrise views from higher perspectives.",
    tags: ["Abstract", "Spectral", "Sunrise", "Vibrant"]
  },
  {
    id: 9,
    src: "./Paintings/painting_9.jpg",
    title: "Ethereal Echoes",
    category: "Expressionism",
    medium: "Mixed Media on Canvas",
    dimensions: "24\" x 30\"",
    year: "2022",
    caption: "Layered washes of translucent paint overlaid with fine charcoal ink line work.",
    tags: ["Layered", "Ink", "Texture", "Subtle"]
  },
  {
    id: 10,
    src: "./Paintings/painting_10.jpg",
    title: "Rhythms of Nature",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: "2023",
    caption: "Organic patterns inspired by botanical forms, bark textures, and flowing natural currents.",
    tags: ["Organic", "Botanical", "Texture", "Earth"]
  },
  {
    id: 11,
    src: "./Paintings/painting_11.jpg",
    title: "Autumn Sonnet",
    category: "Landscape",
    medium: "Oil & Knife Work",
    dimensions: "28\" x 36\"",
    year: "2023",
    caption: "Rich ochre, burnt sienna, and vibrant cadmium orange portraying the rustic grace of woodland change.",
    tags: ["Autumn", "Woodland", "Ochre", "Textured"]
  },
  {
    id: 12,
    src: "./Paintings/painting_12.jpg",
    title: "Visions of Infinity",
    category: "Abstract",
    medium: "Acrylic & Metallic Pigment",
    dimensions: "40\" x 50\"",
    year: "2024",
    caption: "Shimmering bronze and deep ultramarine currents cascading into infinite vanishing points.",
    tags: ["Metallic", "Abstract", "Depth", "Bronze"]
  },
  {
    id: 13,
    src: "./Paintings/painting_13.jpg",
    title: "The Solitary Traveler",
    category: "Portrait",
    medium: "Oil on Canvas",
    dimensions: "24\" x 32\"",
    year: "2022",
    caption: "A contemplative silhouette set against a dramatic backdrop of twilight clouds and distant lights.",
    tags: ["Silhouette", "Twilight", "Figurative", "Story"]
  },
  {
    id: 14,
    src: "./Paintings/painting_14.jpg",
    title: "Emerald Sanctuary",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "30\" x 40\"",
    year: "2023",
    caption: "Deep moss greens, lime highlights, and dappled sunlight filtering through a dense woodland canopy.",
    tags: ["Forest", "Canopy", "Sunlight", "Greenery"]
  },
  {
    id: 15,
    src: "./Paintings/painting_15.jpg",
    title: "Fiery Solstice",
    category: "Expressionism",
    medium: "Acrylic & Gel Medium",
    dimensions: "36\" x 36\"",
    year: "2024",
    caption: "High contrast fiery yellows and volcanic reds bursting through dark basalt grey textures.",
    tags: ["Fire", "Energy", "Expressionist", "High Contrast"]
  },
  {
    id: 16,
    src: "./Paintings/painting_16.jpg",
    title: "Oceanic Tempest",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "32\" x 48\"",
    year: "2023",
    caption: "The turbulent force of crashing sea waves rendered with expressive brushwork and ocean spray detail.",
    tags: ["Seascape", "Waves", "Ocean", "Dynamic"]
  },
  {
    id: 17,
    src: "./Paintings/painting_17.jpg",
    title: "Shadows in Geometry",
    category: "Modern Art",
    medium: "Acrylic on Board",
    dimensions: "24\" x 24\"",
    year: "2023",
    caption: "Clean minimal lines contrasting against textured monochrome color blocks.",
    tags: ["Minimalist", "Monochrome", "Modern", "Lines"]
  },
  {
    id: 18,
    src: "./Paintings/painting_18.jpg",
    title: "Breeze of Spring",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "24\" x 30\"",
    year: "2024",
    caption: "Delicate pastels and soft floral motifs swaying in an imaginary springtime meadow wind.",
    tags: ["Floral", "Spring", "Soft", "Pastels"]
  },
  {
    id: 19,
    src: "./Paintings/painting_19.jpg",
    title: "Gilded Memories",
    category: "Abstract",
    medium: "Mixed Media & Leafing",
    dimensions: "36\" x 40\"",
    year: "2023",
    caption: "Intricate vintage textures intermingled with hand-applied copper leaf and antiqued glazes.",
    tags: ["Copper Leaf", "Vintage", "Textured", "Glaze"]
  },
  {
    id: 20,
    src: "./Paintings/painting_20.jpg",
    title: "Twilight Mirage",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "30\" x 40\"",
    year: "2024",
    caption: "Soft purple gradients reflecting off desert sands as day gracefully transitions into night.",
    tags: ["Desert", "Twilight", "Purple", "Gradient"]
  },
  {
    id: 21,
    src: "./Paintings/painting_21.jpg",
    title: "The Sculptor’s Vision",
    category: "Portrait",
    medium: "Oil on Linen",
    dimensions: "28\" x 34\"",
    year: "2022",
    caption: "A painterly homage to form, hands, and the physical act of creation.",
    tags: ["Craft", "Hands", "Form", "Homage"]
  },
  {
    id: 22,
    src: "./Paintings/painting_22.jpg",
    title: "Metropolis Glow",
    category: "Modern Art",
    medium: "Acrylic & Oil Ink",
    dimensions: "36\" x 48\"",
    year: "2024",
    caption: "Layered reflections of city lights, rain-drenched pavement, and bustling urban night life.",
    tags: ["Metropolis", "Rain", "City Lights", "Reflections"]
  },
  {
    id: 23,
    src: "./Paintings/painting_23.jpg",
    title: "Serengeti Dusk",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "30\" x 48\"",
    year: "2023",
    caption: "Silhouetted wildlife moving across golden grasslands under a burning African dusk horizon.",
    tags: ["Wildlife", "Dusk", "Golden", "African Horizon"]
  },
  {
    id: 24,
    src: "./Paintings/painting_24.jpg",
    title: "Cosmic Odyssey",
    category: "Abstract",
    medium: "Acrylic Pour & Oil Glaze",
    dimensions: "40\" x 40\"",
    year: "2024",
    caption: "Fluid nebula patterns swirling in deep space violet, indigo, and sparkling white speckles.",
    tags: ["Nebula", "Space", "Fluid", "Cosmic"]
  },
  {
    id: 25,
    src: "./Paintings/painting_25.jpg",
    title: "Whispers of Winter",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "24\" x 36\"",
    year: "2023",
    caption: "Pristine snowcapped hills bathed in cool cyan and lavender morning light.",
    tags: ["Winter", "Snow", "Cyan", "Serene"]
  },
  {
    id: 26,
    src: "./Paintings/painting_26.jpg",
    title: "Dancer in Motion",
    category: "Expressionism",
    medium: "Oil & Charcoal",
    dimensions: "30\" x 40\"",
    year: "2022",
    caption: "Dynamic gestural strokes representing fluid human motion, poise, and dramatic rhythm.",
    tags: ["Dance", "Motion", "Gestural", "Rhythm"]
  },
  {
    id: 27,
    src: "./Paintings/painting_27.jpg",
    title: "Reflections in Amber",
    category: "Abstract",
    medium: "Mixed Media",
    dimensions: "32\" x 32\"",
    year: "2023",
    caption: "Warm amber resins combined with crackle mediums, conveying ancient geologic beauty.",
    tags: ["Amber", "Resin", "Crackle", "Earth"]
  },
  {
    id: 28,
    src: "./Paintings/painting_28.jpg",
    title: "Aura of Tranquility",
    category: "Modern Art",
    medium: "Acrylic on Linen",
    dimensions: "24\" x 24\"",
    year: "2024",
    caption: "Soft circular color field painting designed to evoke meditative calmness and inner peace.",
    tags: ["Color Field", "Zen", "Meditation", "Soft"]
  },
  {
    id: 29,
    src: "./Paintings/painting_29.jpg",
    title: "Path to Enlightenment",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: "2023",
    caption: "A winding forest path bathed in radiant golden sunlight leading into mist.",
    tags: ["Path", "Light", "Forest", "Spiritual"]
  },
  {
    id: 30,
    src: "./Paintings/painting_30.jpg",
    title: "The Alchemist’s Flame",
    category: "Expressionism",
    medium: "Oil & Gold Pigment",
    dimensions: "30\" x 40\"",
    year: "2024",
    caption: "Fiery orange and metallic gold sparks floating against a dramatic midnight black canvas.",
    tags: ["Sparks", "Gold", "Fire", "Dramatic"]
  },
  {
    id: 31,
    src: "./Paintings/painting_31.jpg",
    title: "Harmony of Spheres",
    category: "Abstract",
    medium: "Acrylic on Canvas",
    dimensions: "36\" x 36\"",
    year: "2023",
    caption: "Interlocking geometric spheres exploring spatial harmony, gradient balance, and depth.",
    tags: ["Geometry", "Spheres", "Balance", "Modern"]
  },
  {
    id: 32,
    src: "./Paintings/painting_32.jpg",
    title: "Song of the Peacock",
    category: "Nature & Wildlife",
    medium: "Oil & Metallic Paint",
    dimensions: "30\" x 42\"",
    year: "2023",
    caption: "Rich royal blue and shimmering iridescent green feathers rendered in exquisite fine detail.",
    tags: ["Peacock", "Feathers", "Iridescent", "Royal Blue"]
  },
  {
    id: 33,
    src: "./Paintings/painting_33.jpg",
    title: "Venetian Glow",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "28\" x 38\"",
    year: "2022",
    caption: "Sunlit Venetian canal reflections blending historical romance with painterly impressionism.",
    tags: ["Venice", "Canal", "Romance", "Impressionism"]
  },
  {
    id: 34,
    src: "./Paintings/painting_34.jpg",
    title: "The Eternal Muse",
    category: "Portrait",
    medium: "Oil on Linen",
    dimensions: "24\" x 36\"",
    year: "2023",
    caption: "Graceful portrait capturing timeless beauty through delicate skin tones and subtle background textures.",
    tags: ["Muse", "Beauty", "Classical", "Linen"]
  },
  {
    id: 35,
    src: "./Paintings/painting_35.jpg",
    title: "Quantum Flux",
    category: "Abstract",
    medium: "Acrylic & Ink",
    dimensions: "40\" x 50\"",
    year: "2024",
    caption: "Dynamic linework and splatters simulating quantum particle movement across dark space.",
    tags: ["Quantum", "Particles", "Dynamic", "Ink"]
  },
  {
    id: 36,
    src: "./Paintings/painting_36.jpg",
    title: "Monsoon Symphony",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "30\" x 40\"",
    year: "2023",
    caption: "Heavy rainfall over lush tropical foliage, capturing the freshness of monsoon air.",
    tags: ["Rain", "Monsoon", "Tropical", "Fresh"]
  },
  {
    id: 37,
    src: "./Paintings/painting_37.jpg",
    title: "Fragments of Time",
    category: "Modern Art",
    medium: "Collage & Oil",
    dimensions: "32\" x 40\"",
    year: "2023",
    caption: "Deconstructed architectural elements and newspaper textures glazed with warm amber tones.",
    tags: ["Collage", "Time", "Modern", "Deconstructed"]
  },
  {
    id: 38,
    src: "./Paintings/painting_38.jpg",
    title: "Cascade of Stars",
    category: "Abstract",
    medium: "Oil & Foil",
    dimensions: "36\" x 48\"",
    year: "2024",
    caption: "Luminous silver sparkles cascading down a nocturnal sky of Prussian blue and violet.",
    tags: ["Stars", "Cascade", "Silver", "Night Sky"]
  },
  {
    id: 39,
    src: "./Paintings/painting_39.jpg",
    title: "Valley of Light",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "30\" x 45\"",
    year: "2023",
    caption: "Panoramic mountain valley flooded with bright golden afternoon light and rolling clouds.",
    tags: ["Valley", "Panoramic", "Mountains", "Light"]
  },
  {
    id: 40,
    src: "./Paintings/painting_40.jpg",
    title: "Wildfire Passion",
    category: "Expressionism",
    medium: "Acrylic & Charcoal",
    dimensions: "36\" x 36\"",
    year: "2024",
    caption: "Spontaneous gesture drawing overlaid with intense flame orange and crimson acrylics.",
    tags: ["Gestural", "Flame", "Wildfire", "Expressionism"]
  },
  {
    id: 41,
    src: "./Paintings/painting_41.jpg",
    title: "Silent Guardian",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "24\" x 36\"",
    year: "2022",
    caption: "A majestic owl perched quietly under moonlight, rendered with soft feathers and sharp eyes.",
    tags: ["Owl", "Moonlight", "Wildlife", "Guardian"]
  },
  {
    id: 42,
    src: "./Paintings/painting_42.jpg",
    title: "Infinite Waves",
    category: "Abstract",
    medium: "Acrylic & Molding Paste",
    dimensions: "40\" x 40\"",
    year: "2024",
    caption: "High-relief sculptural waves of white, grey, and aqua blue creating physical depth.",
    tags: ["Relief", "Sculptural", "Waves", "White"]
  },
  {
    id: 43,
    src: "./Paintings/painting_43.jpg",
    title: "Dawn of Creation",
    category: "Expressionism",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: "2023",
    caption: "Primordial light bursting out of dark cosmic clouds in dramatic impasto layers.",
    tags: ["Dawn", "Impasto", "Cosmic", "Primordial"]
  },
  {
    id: 44,
    src: "./Paintings/painting_44.jpg",
    title: "Chariot of Solitude",
    category: "Modern Art",
    medium: "Oil & Gouache",
    dimensions: "30\" x 40\"",
    year: "2022",
    caption: "Surrealist elements juxtaposed against a serene expanse of desert horizon.",
    tags: ["Surrealism", "Desert", "Modern", "Solitude"]
  },
  {
    id: 45,
    src: "./Paintings/painting_45.jpg",
    title: "Blossom Canopy",
    category: "Nature & Wildlife",
    medium: "Oil & Palette Knife",
    dimensions: "28\" x 36\"",
    year: "2023",
    caption: "Thick textured cherry blossom petals standing out against a soft sky blue backdrop.",
    tags: ["Cherry Blossom", "Petals", "Textured", "Pink"]
  },
  {
    id: 46,
    src: "./Paintings/painting_46.jpg",
    title: "Twilight Reflection",
    category: "Landscape",
    medium: "Oil on Board",
    dimensions: "20\" x 30\"",
    year: "2023",
    caption: "Mirror-like lake surface reflecting serene twilight pastels and gentle tree outlines.",
    tags: ["Lake", "Reflection", "Twilight", "Pastels"]
  },
  {
    id: 47,
    src: "./Paintings/painting_47.jpg",
    title: "Whispers of Gold",
    category: "Abstract",
    medium: "Acrylic & Gold Leaf",
    dimensions: "30\" x 30\"",
    year: "2024",
    caption: "Minimalist black canvas punctuated by delicate, organic veins of pure gold leafing.",
    tags: ["Gold Leaf", "Minimalist", "Black & Gold", "Elegant"]
  },
  {
    id: 48,
    src: "./Paintings/painting_48.jpg",
    title: "The Wanderer",
    category: "Portrait",
    medium: "Oil on Linen",
    dimensions: "24\" x 32\"",
    year: "2022",
    caption: "Expressive figurative painting conveying resilience, life journeys, and inner strength.",
    tags: ["Wanderer", "Strength", "Figurative", "Linen"]
  },
  {
    id: 49,
    src: "./Paintings/painting_49.jpg",
    title: "Celestial Gateway",
    category: "Abstract",
    medium: "Oil & Resins",
    dimensions: "36\" x 48\"",
    year: "2024",
    caption: "Luminous portal of warm solar light surrounded by swirling cosmic currents.",
    tags: ["Portal", "Solar Light", "Resin", "Cosmic"]
  },
  {
    id: 50,
    src: "./Paintings/painting_50.jpg",
    title: "Autumn Mist in Valley",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "30\" x 40\"",
    year: "2023",
    caption: "Foggy autumn morning over rolling hills dressed in red, orange, and deep brown foliage.",
    tags: ["Autumn", "Valley", "Fog", "Foliage"]
  },
  {
    id: 51,
    src: "./Paintings/painting_51.jpg",
    title: "Symphony of Blue",
    category: "Expressionism",
    medium: "Acrylic & Ink",
    dimensions: "32\" x 40\"",
    year: "2024",
    caption: "Sweeping gestural curves of indigo, cobalt, and cerulean blue evoking ocean depths.",
    tags: ["Blue", "Cobalt", "Ocean Depth", "Gestural"]
  },
  {
    id: 53,
    src: "./Paintings/painting_53.jpg",
    title: "Radiant Sunrise",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    year: "2023",
    caption: "Dramatic sunrise breaking over rugged coastal cliffs, casting warm rays across water.",
    tags: ["Sunrise", "Coastal", "Cliffs", "Rays"]
  },
  {
    id: 54,
    src: "./Paintings/painting_54.jpg",
    title: "Mystic Woods",
    category: "Nature & Wildlife",
    medium: "Oil & Tempera",
    dimensions: "28\" x 36\"",
    year: "2022",
    caption: "Enchanted forest glade illuminated by soft beams of green and golden light.",
    tags: ["Enchanted", "Forest", "Glade", "Mystic"]
  },
  {
    id: 55,
    src: "./Paintings/painting_55.jpg",
    title: "The Architect’s Mind",
    category: "Modern Art",
    medium: "Acrylic & Ink on Canvas",
    dimensions: "36\" x 36\"",
    year: "2024",
    caption: "Complex overlay of blue architectural blueprints with expressive abstract brushwork.",
    tags: ["Blueprint", "Architecture", "Modern Art", "Ink"]
  },
  {
    id: 56,
    src: "./Paintings/painting_56.jpg",
    title: "Fiery Horizon",
    category: "Landscape",
    medium: "Oil on Canvas",
    dimensions: "30\" x 42\"",
    year: "2023",
    caption: "Vivid orange and violet sunset over calm ocean waters stretching to the horizon.",
    tags: ["Sunset", "Ocean", "Fiery", "Calm"]
  },
  {
    id: 57,
    src: "./Paintings/painting_57.jpg",
    title: "Vibrations of Sound",
    category: "Abstract",
    medium: "Mixed Media",
    dimensions: "32\" x 32\"",
    year: "2024",
    caption: "Rhythmic wave patterns translating musical resonance into rich visual colors.",
    tags: ["Music", "Sound Waves", "Rhythm", "Colors"]
  },
  {
    id: 58,
    src: "./Paintings/painting_58.jpg",
    title: "The Royal Heritage",
    category: "Portrait",
    medium: "Oil & Gold Leaf on Linen",
    dimensions: "36\" x 48\"",
    year: "2023",
    caption: "Ornate regal portrait featuring traditional Indian craftsmanship motifs and golden embellishments.",
    tags: ["Heritage", "Royal", "Gold Leaf", "Indian Art"]
  },
  {
    id: 59,
    src: "./Paintings/painting_59.jpg",
    title: "Eternal Flow",
    category: "Abstract",
    medium: "Oil & Marble Dust",
    dimensions: "40\" x 60\"",
    year: "2024",
    caption: "Monumental abstract canvas with tactile marble textures swirling like natural riverbeds.",
    tags: ["Marble Dust", "Monumental", "Riverbed", "Texture"]
  },
  {
    id: 60,
    src: "./Paintings/painting_60.jpg",
    title: "Lotus in Bloom",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "30\" x 40\"",
    year: "2023",
    caption: "Luminous pink lotus flower floating serenely on dark water with glistening raindrops.",
    tags: ["Lotus", "Pond", "Raindrops", "Serene"]
  },
  {
    id: 61,
    src: "./Paintings/painting_61.jpg",
    title: "Spiritual Divine",
    category: "Expressionism",
    medium: "Oil & Gold Embellishment",
    dimensions: "40\" x 50\"",
    year: "2024",
    caption: "Deeply resonant spiritual composition blending iconography with modern abstract aura.",
    tags: ["Divine", "Spiritual", "Aura", "Gold"]
  },
  {
    id: 62,
    src: "./Paintings/painting_62.jpg",
    title: "Urban Skyline at Twilight",
    category: "Modern Art",
    medium: "Acrylic on Board",
    dimensions: "30\" x 45\"",
    year: "2023",
    caption: "Impressionistic city skyline view during dusk, featuring warm windows and blue streetscapes.",
    tags: ["Skyline", "City", "Dusk", "Modern"]
  },
  {
    id: 63,
    src: "./Paintings/painting_63.jpg",
    title: "Passage of Seasons",
    category: "Landscape",
    medium: "Oil Quadruptych Style",
    dimensions: "36\" x 48\"",
    year: "2023",
    caption: "Four harmonized color panels depicting spring, summer, autumn, and winter transitions.",
    tags: ["Seasons", "Quadruptych", "Transition", "Landscape"]
  },
  {
    id: 64,
    src: "./Paintings/painting_64.jpg",
    title: "Celestial Mirage",
    category: "Abstract",
    medium: "Acrylic & Holographic Pigment",
    dimensions: "36\" x 36\"",
    year: "2024",
    caption: "Color-shifting holographic layers reflecting changing light angles across the room.",
    tags: ["Holographic", "Light", "Color-Shift", "Abstract"]
  },
  {
    id: 65,
    src: "./Paintings/painting_65.jpg",
    title: "The Philosopher",
    category: "Portrait",
    medium: "Oil on Canvas",
    dimensions: "28\" x 36\"",
    year: "2022",
    caption: "Thought-provoking portrait emphasizing deep eyes, weathered hands, and quiet wisdom.",
    tags: ["Wisdom", "Philosopher", "Depth", "Portrait"]
  },
  {
    id: 66,
    src: "./Paintings/painting_66.jpg",
    title: "Whispers of the Wind",
    category: "Nature & Wildlife",
    medium: "Oil on Canvas",
    dimensions: "24\" x 36\"",
    year: "2023",
    caption: "Gentle grass stalks bending under a warm summer breeze under a pastel sky.",
    tags: ["Breeze", "Summer", "Pastel", "Nature"]
  },
  {
    id: 67,
    src: "./Paintings/painting_67.jpg",
    title: "Golden Cascades",
    category: "Abstract",
    medium: "Oil & Metallic Leaf",
    dimensions: "30\" x 40\"",
    year: "2024",
    caption: "Cascading golden light streams cutting through deep charcoal grey abstract layers.",
    tags: ["Gold", "Cascades", "Abstract", "Charcoal"]
  },
  {
    id: 68,
    src: "./Paintings/painting_68.jpg",
    title: "The Masterpiece",
    category: "Expressionism",
    medium: "Oil on Linen",
    dimensions: "48\" x 60\"",
    year: "2024",
    caption: "A grand synthesis of color, emotion, impasto texture, and fine art mastery developed over months.",
    tags: ["Masterpiece", "Grand", "Oil", "Linen", "Featured"]
  }
];

const CATEGORIES = ["All", "Abstract", "Landscape", "Portrait", "Expressionism", "Modern Art", "Nature & Wildlife"];

export default function ArtistGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default"); // default, title, newest
  const [viewMode, setViewMode] = useState("auto"); // "auto", "grid", "compact", "single"
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter and Sort paintings
  const filteredPaintings = useMemo(() => {
    let result = PAINTINGS_DATA.filter((p) => {
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.medium.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "title") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "newest") {
      result = [...result].sort((a, b) => b.year - a.year || b.id - a.id);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Slideshow Auto-Advance Effect
  useEffect(() => {
    let timer;
    if (isSlideshowPlaying && activeLightboxIndex !== null && filteredPaintings.length > 0) {
      timer = setInterval(() => {
        setActiveLightboxIndex((prev) => 
          prev !== null && prev < filteredPaintings.length - 1 ? prev + 1 : 0
        );
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isSlideshowPlaying, activeLightboxIndex, filteredPaintings.length]);

  // Reset modes when modal closes
  useEffect(() => {
    if (activeLightboxIndex === null) {
      setIsSlideshowPlaying(false);
      setIsFullscreenMode(false);
    }
  }, [activeLightboxIndex]);

  // Keyboard navigation & controls
  const handleKeyDown = useCallback((e) => {
    if (activeLightboxIndex === null) return;

    if (e.key === "Escape") {
      if (isFullscreenMode) {
        setIsFullscreenMode(false);
      } else {
        setActiveLightboxIndex(null);
      }
    } else if (e.key === "ArrowLeft") {
      setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPaintings.length - 1));
    } else if (e.key === "ArrowRight") {
      setActiveLightboxIndex((prev) => (prev < filteredPaintings.length - 1 ? prev + 1 : 0));
    } else if (e.key === " " || e.key === "Spacebar") {
      e.preventDefault();
      setIsSlideshowPlaying((prev) => !prev);
    } else if (e.key === "f" || e.key === "F") {
      setIsFullscreenMode((prev) => !prev);
    }
  }, [activeLightboxIndex, isFullscreenMode, filteredPaintings.length]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock scroll when lightbox, slideshow, or fullscreen mode is active
  useEffect(() => {
    const shouldLockScroll = activeLightboxIndex !== null || isSlideshowPlaying || isFullscreenMode;
    const originalOverflow = document.body.style.overflow;

    if (shouldLockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
    }

    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [activeLightboxIndex, isSlideshowPlaying, isFullscreenMode]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentPainting = activeLightboxIndex !== null ? filteredPaintings[activeLightboxIndex] : null;
  const isBackgroundBlurred = isSlideshowPlaying || isFullscreenMode;

  const backgroundBlurStyle = {
    filter: isBackgroundBlurred ? 'blur(16px) brightness(0.35)' : 'none'
  };

  // Responsive Grid Class depending on view mode selector
  const getGridClasses = () => {
    if (viewMode === "single") {
      return "grid grid-cols-1 max-w-2xl mx-auto gap-8";
    }
    if (viewMode === "compact") {
      return "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4";
    }
    // Default auto responsive grid
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6";
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white selection:bg-[#ffC31f] selection:text-black font-sans antialiased overflow-x-hidden">
      <Head>
        <title>Nimish Shah | Fine Art Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Explore Nimish Shah's fine art gallery showcasing original oil paintings, acrylic masterworks, and expressionist art." />
        <meta property="og:title" content="Nimish Shah | Fine Art Gallery" />
        <meta property="og:description" content="Original paintings and visual arts portfolio by Nimish Shah." />
        <meta property="og:image" content="./Paintings/banner.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimish1969.github.io/artist" />
        <link rel="icon" href="./favicon_io/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <header
        className="sticky top-0 z-40 bg-[#0d1117]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg"
        style={backgroundBlurStyle}
      >
        <Navbar isArtistPage={true} />
      </header>

      {/* Main Content (Deeply Blurred when Slideshow or Fullscreen is Active) */}
      <main 
        id="main-content" 
        className="w-full transition-all duration-700 ease-in-out"
        style={{
          ...backgroundBlurStyle,
          transform: isBackgroundBlurred ? 'scale(0.98)' : 'scale(1)'
        }}
      >
        {/* Hero Banner Section */}
        <section className="relative w-full h-[45vh] xs:h-[50vh] sm:h-[60vh] md:h-[65vh] min-h-[340px] sm:min-h-[460px] flex items-center justify-center overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 z-0">
            <img 
              src="./Paintings/banner.jpg" 
              alt="Nimish Shah Art Banner" 
              className="w-full h-full object-cover object-center filter brightness-45 scale-105 transform transition-transform duration-10000 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/95 via-transparent to-[#0d1117]/95"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl px-4 sm:px-6 py-6 sm:py-12 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#ffC31f]/10 border border-[#ffC31f]/30 text-[#ffC31f] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-6 animate-pulse">
              <FaStar className="text-xs" /> Fine Art Retrospective
            </div>

            <h1 className="kumar-one-regular text-2xl xs:text-3xl sm:text-5xl md:text-6xl text-white tracking-wide leading-tight mb-2 sm:mb-4 drop-shadow-md px-2">
              Nimish Shah <span className="text-[#ffC31f]">Art Gallery</span>
            </h1>

            <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-xl max-w-3xl leading-relaxed mb-4 sm:mb-8 font-light px-2 sm:px-4 line-clamp-3 sm:line-clamp-none">
              Explore a curated journey of original oil paintings, acrylic textures, and expressive fine artwork. Each canvas represents decades of passion, color exploration, and visual storytelling.
            </p>

            {/* Gallery Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-12 pt-3 sm:pt-4 border-t border-gray-700/50 w-full max-w-2xl">
              <div className="px-1">
                <span className="block text-lg xs:text-xl sm:text-3xl font-bold text-[#ffC31f]">67+</span>
                <span className="text-[9px] xs:text-[10px] sm:text-sm text-gray-400 uppercase tracking-wider block truncate">Artworks</span>
              </div>
              <div className="px-1">
                <span className="block text-lg xs:text-xl sm:text-3xl font-bold text-[#ffC31f]">6</span>
                <span className="text-[9px] xs:text-[10px] sm:text-sm text-gray-400 uppercase tracking-wider block truncate">Collections</span>
              </div>
              <div className="px-1">
                <span className="block text-lg xs:text-xl sm:text-3xl font-bold text-[#ffC31f]">30+</span>
                <span className="text-[9px] xs:text-[10px] sm:text-sm text-gray-400 uppercase tracking-wider block truncate">Years Mastery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Toolbar Section */}
        <section className="sticky top-[3.8rem] sm:top-[4.5rem] z-30 bg-[#0d1117]/95 backdrop-blur-xl border-b border-gray-800 py-3 sm:py-4 px-3 sm:px-6 lg:px-8 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-72 lg:w-80">
                <FaMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
                <input 
                  type="text"
                  placeholder="Search title, medium, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-900/90 text-white text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2 border border-gray-700 focus:border-[#ffC31f] focus:outline-none focus:ring-1 focus:ring-[#ffC31f] transition-all placeholder-gray-500"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <FaXmark className="text-xs" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Pills (Horizontal Touch Swipe) */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto py-1 scrollbar-none snap-x touch-pan-x">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 snap-start ${
                    selectedCategory === cat 
                      ? "bg-[#ffC31f] text-black shadow-lg shadow-[#ffC31f]/20 font-semibold scale-105" 
                      : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {cat === "All" && <FaPalette className="text-[10px] sm:text-xs" />}
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & Grid Layout View Mode Toggles */}
            <div className="flex items-center justify-between md:justify-end gap-2 w-full md:w-auto border-t md:border-t-0 pt-2 md:pt-0 border-gray-800">
              {/* View Layout Selector Buttons */}
              <div className="flex items-center bg-gray-900 p-1 rounded-xl border border-gray-800 gap-0.5">
                <button
                  onClick={() => setViewMode("auto")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === "auto" ? "bg-[#ffC31f] text-black font-bold" : "text-gray-400 hover:text-white"}`}
                  title="Grid View"
                >
                  <FaBorderAll className="text-xs" />
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === "compact" ? "bg-[#ffC31f] text-black font-bold" : "text-gray-400 hover:text-white"}`}
                  title="Compact View"
                >
                  <FaGrip className="text-xs" />
                </button>
                <button
                  onClick={() => setViewMode("single")}
                  className={`p-1.5 rounded-lg text-xs transition-colors ${viewMode === "single" ? "bg-[#ffC31f] text-black font-bold" : "text-gray-400 hover:text-white"}`}
                  title="Single Column View"
                >
                  <FaList className="text-xs" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider hidden sm:flex items-center gap-1">
                  <FaSliders className="text-[#ffC31f]" /> Sort:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-900 text-white text-xs rounded-xl px-2.5 py-1.5 border border-gray-700 focus:border-[#ffC31f] focus:outline-none cursor-pointer"
                >
                  <option value="default">Default</option>
                  <option value="title">Title (A-Z)</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Active Filter Info & Item Count */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-800">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-[#ffC31f]">{selectedCategory}</span> Collection
              </h2>
              <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5">
                Showing {filteredPaintings.length} artwork{filteredPaintings.length === 1 ? "" : "s"}
                {searchQuery && <span> matching "<strong className="text-gray-200">{searchQuery}</strong>"</span>}
              </p>
            </div>

            {(selectedCategory !== "All" || searchQuery) && (
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="text-xs text-[#ffC31f] hover:underline flex items-center gap-1"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Grid Layout */}
          {filteredPaintings.length > 0 ? (
            <div className={getGridClasses()}>
              {filteredPaintings.map((painting, index) => (
                <div
                  key={painting.id}
                  onClick={() => setActiveLightboxIndex(index)}
                  className="group relative bg-gray-900/70 rounded-2xl overflow-hidden border border-gray-800/90 hover:border-[#ffC31f]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#ffC31f]/10 cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-950">
                    <img
                      src={painting.src}
                      alt={painting.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                    />

                    {/* Category Pill Top Left */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[9px] sm:text-[10px] text-[#ffC31f] font-semibold uppercase tracking-wider border border-[#ffC31f]/30">
                        {painting.category}
                      </span>
                    </div>

                    {/* Heart Button Top Right */}

                    {/* View Icon Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                      <div className="p-3 rounded-full bg-[#ffC31f] text-black shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300 flex items-center gap-1 font-semibold text-xs">
                        <FaEye className="text-sm sm:text-base" /> View Details
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-start justify-between gap-1.5 mb-1">
                        <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#ffC31f] transition-colors leading-snug line-clamp-1">
                          {painting.title}
                        </h3>
                        <span className="text-[10px] sm:text-xs text-gray-400 font-mono flex-shrink-0">{painting.year}</span>
                      </div>

                      {viewMode !== "compact" && (
                        <p className="text-[11px] sm:text-xs text-gray-400 line-clamp-2 leading-relaxed font-light mb-2 sm:mb-3">
                          {painting.caption}
                        </p>
                      )}
                    </div>

                    {/* Medium & Dimensions */}
                    {viewMode !== "compact" ? (
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-800/60 text-[10px] sm:text-[11px]">
                        <span className="text-gray-400 truncate max-w-[60%]">{painting.medium}</span>
                        <span className="text-[#ffC31f] font-mono">{painting.dimensions}</span>
                      </div>
                    ) : (
                      <span className="text-[10px] text-[#ffC31f] font-mono mt-1 block truncate">{painting.dimensions}</span>
                    )}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center bg-gray-900/40 rounded-3xl border border-gray-800 my-6 px-4">
              <FaPalette className="mx-auto text-3xl sm:text-4xl text-gray-600 mb-3 animate-bounce" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-300 mb-1.5">No Paintings Found</h3>
              <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mb-5">
                No artworks matched your current filter criteria. Try searching for another keyword or selecting a different category.
              </p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2 rounded-xl bg-[#ffC31f] text-black font-semibold text-xs sm:text-sm hover:bg-[#e0ab1b] transition-colors shadow-lg"
              >
                View All Artworks
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Standard Lightbox Modal */}
      {currentPainting && !isFullscreenMode && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto transition-all duration-700 animate-fadeIn ${
            isSlideshowPlaying 
              ? "bg-black/98 backdrop-blur-3xl" 
              : "bg-black/92 backdrop-blur-2xl"
          }`}
          onClick={() => setActiveLightboxIndex(null)}
        >
          {/* Main Modal Card */}
          <div 
            className={`relative w-full max-w-6xl max-h-[96vh] sm:max-h-[92vh] bg-gray-900 rounded-2xl sm:rounded-3xl border overflow-hidden shadow-2xl flex flex-col lg:flex-row my-auto transition-all duration-700 ${
              isSlideshowPlaying 
                ? "border-[#ffC31f]/60 shadow-[0_0_90px_rgba(255,195,31,0.25)]" 
                : "border-gray-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar Inside Modal (Close, Fullscreen, Slideshow) */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-2">
              {/* Slideshow Button */}
              <button
                onClick={() => setIsSlideshowPlaying(!isSlideshowPlaying)}
                className={`px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg border border-gray-700 ${
                  isSlideshowPlaying 
                    ? "bg-[#ffC31f] text-black animate-pulse" 
                    : "bg-black/80 text-white hover:bg-gray-800"
                }`}
                title="Toggle Automatic Slideshow (Spacebar)"
              >
                {isSlideshowPlaying ? (
                  <>
                    <FaPause className="text-xs" /> <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <FaPlay className="text-xs" /> <span className="hidden sm:inline">Slideshow</span>
                  </>
                )}
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsFullscreenMode(true)}
                className="p-2.5 sm:p-3 rounded-full bg-black/80 hover:bg-[#ffC31f] text-white hover:text-black transition-colors border border-gray-700 shadow-xl"
                title="Fullscreen Image View (F)"
              >
                <FaExpand className="text-xs sm:text-sm" />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxIndex(null)}
                className="p-2.5 sm:p-3 rounded-full bg-black/80 hover:bg-red-600 text-white transition-colors border border-gray-700 shadow-xl"
                title="Close Modal (Esc)"
              >
                <FaXmark className="text-xs sm:text-sm" />
              </button>
            </div>

            {/* Left Side: Artwork Display */}
            <div className="relative w-full lg:w-2/3 h-[40vh] sm:h-[50vh] lg:h-auto min-h-[240px] bg-black flex items-center justify-center p-3 sm:p-6 overflow-hidden group">
              <img
                src={currentPainting.src}
                alt={currentPainting.title}
                onClick={() => setIsFullscreenMode(true)}
                className={`max-w-full max-h-full object-contain drop-shadow-2xl rounded-md sm:rounded-lg cursor-zoom-in group-hover:scale-102 transition-all duration-500 ${
                  isSlideshowPlaying ? "ring-2 ring-[#ffC31f]/40 shadow-[0_0_60px_rgba(255,195,31,0.2)]" : ""
                }`}
                title="Click image to enter Fullscreen mode"
              />

              {/* Click to Fullscreen Indicator overlay on image hover */}
              <div 
                onClick={() => setIsFullscreenMode(true)}
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-zoom-in pointer-events-none"
              >
                <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-xs text-[#ffC31f] font-medium border border-[#ffC31f]/40 flex items-center gap-1.5">
                  <FaExpand /> Click for Fullscreen
                </span>
              </div>

              {/* Navigation Arrow Left */}
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPaintings.length - 1))}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-[#ffC31f] text-white hover:text-black transition-all border border-gray-700 shadow-lg"
                title="Previous Painting"
              >
                <FaChevronLeft className="text-xs sm:text-base" />
              </button>

              {/* Navigation Arrow Right */}
              <button
                onClick={() => setActiveLightboxIndex((prev) => (prev < filteredPaintings.length - 1 ? prev + 1 : 0))}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/70 hover:bg-[#ffC31f] text-white hover:text-black transition-all border border-gray-700 shadow-lg"
                title="Next Painting"
              >
                <FaChevronRight className="text-xs sm:text-base" />
              </button>

              {/* Artwork Counter Indicator & Slideshow Status */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/80 text-[10px] text-gray-300 border border-gray-800 font-mono flex items-center gap-2">
                <span>{activeLightboxIndex + 1} / {filteredPaintings.length}</span>
                {isSlideshowPlaying && (
                  <span className="text-[#ffC31f] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffC31f] animate-ping" /> Playing
                  </span>
                )}
              </div>
            </div>

            {/* Right Side: Artwork Details */}
            <div className="w-full lg:w-1/3 p-4 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[52vh] lg:max-h-none bg-gray-900 border-t lg:border-t-0 lg:border-l border-gray-800">
              <div>
                {/* Category Badge & Favorite Button */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 pr-24 sm:pr-28">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#ffC31f]/10 text-[#ffC31f] text-[10px] sm:text-xs font-semibold uppercase tracking-wider border border-[#ffC31f]/30">
                    {currentPainting.category}
                  </span>
                  
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-snug">
                  {currentPainting.title}
                </h2>
                <p className="text-[11px] sm:text-xs text-[#ffC31f] font-mono mb-4 sm:mb-6">Original Artwork by Nimish Shah</p>

                {/* Metadata Table */}
                <div className="space-y-2.5 sm:space-y-3 bg-gray-950/60 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-gray-800 mb-4 sm:mb-6 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Medium:</span>
                    <span className="text-white font-medium text-right ml-2">{currentPainting.medium}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dimensions:</span>
                    <span className="text-white font-mono">{currentPainting.dimensions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year:</span>
                    <span className="text-white font-mono">{currentPainting.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-emerald-400 font-semibold">Private Collection / On Request</span>
                  </div>
                </div>

                {/* Caption / Description */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Artist Notes</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light italic bg-gray-950/40 p-3 sm:p-4 rounded-xl border border-gray-800/60">
                    "{currentPainting.caption}"
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mb-1.5 font-semibold">Keywords</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPainting.tags.map((t) => (
                      <span key={t} className="text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-gray-800 text-gray-300">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 sm:pt-4 border-t border-gray-800 flex items-center gap-2.5 sm:gap-3">
                <a
                  href={`mailto:shahnimish.1969@gmail.com?subject=Inquiry%20regarding%20${encodeURIComponent(currentPainting.title)}`}
                  className="flex-1 text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-[#ffC31f] hover:bg-[#e0ab1b] text-black font-bold text-xs sm:text-sm transition-colors shadow-lg"
                >
                  Inquire Artwork
                </a>
                
                <a
                  href={currentPainting.src}
                  download={`Nimish_Shah_${currentPainting.title.replace(/\s+/g, '_')}.jpg`}
                  className="p-2.5 sm:p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white transition-colors border border-gray-700 text-xs sm:text-sm"
                  title="Download High Res Image"
                >
                  <FaDownload />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Immersive Dedicated Fullscreen View Mode with Deep Background Blur */}
      {currentPainting && isFullscreenMode && (
        <div 
          className={`fixed inset-0 z-[60] flex flex-col items-center justify-between p-4 sm:p-6 transition-all duration-700 animate-fadeIn ${
            isSlideshowPlaying 
              ? "bg-black/99 backdrop-blur-[40px]" 
              : "bg-black/95 backdrop-blur-3xl"
          }`}
          onClick={() => setIsFullscreenMode(false)}
        >
          {/* Top Fullscreen Header */}
          <div 
            className="w-full flex items-center justify-between z-10 bg-black/70 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-gray-800/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                {currentPainting.title}
              </h3>
              <p className="text-xs text-[#ffC31f] font-mono">
                {currentPainting.medium} • {currentPainting.dimensions} ({activeLightboxIndex + 1} / {filteredPaintings.length})
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Slideshow Button in Fullscreen */}
              <button
                onClick={() => setIsSlideshowPlaying(!isSlideshowPlaying)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all border border-gray-700 shadow-lg ${
                  isSlideshowPlaying 
                    ? "bg-[#ffC31f] text-black animate-pulse" 
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {isSlideshowPlaying ? <FaPause /> : <FaPlay />}
                <span className="hidden sm:inline">{isSlideshowPlaying ? "Pause" : "Slideshow"}</span>
              </button>

              {/* Exit Fullscreen Button */}
              <button
                onClick={() => setIsFullscreenMode(false)}
                className="px-3.5 py-2 rounded-xl bg-gray-800 hover:bg-red-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors border border-gray-700 shadow-lg"
              >
                <FaCompress className="text-xs" /> Exit Fullscreen
              </button>
            </div>
          </div>

          {/* Fullscreen Centered Image Display with Ambient Spotlight Blur */}
          <div 
            className="relative w-full flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPainting.src}
              alt={currentPainting.title}
              className={`max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg transition-all duration-700 ${
                isSlideshowPlaying 
                  ? "ring-2 ring-[#ffC31f]/50 shadow-[0_0_120px_rgba(255,195,31,0.35)] scale-102" 
                  : "shadow-[0_0_80px_rgba(0,0,0,0.9)]"
              }`}
            />

            {/* Left Arrow */}
            <button
              onClick={() => setActiveLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredPaintings.length - 1))}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/80 hover:bg-[#ffC31f] text-white hover:text-black transition-all border border-gray-700 shadow-2xl"
              title="Previous Artwork (Left Arrow)"
            >
              <FaChevronLeft className="text-sm sm:text-xl" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setActiveLightboxIndex((prev) => (prev < filteredPaintings.length - 1 ? prev + 1 : 0))}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/80 hover:bg-[#ffC31f] text-white hover:text-black transition-all border border-gray-700 shadow-2xl"
              title="Next Artwork (Right Arrow)"
            >
              <FaChevronRight className="text-sm sm:text-xl" />
            </button>
          </div>

          {/* Bottom Fullscreen Caption Bar */}
          <div 
            className="w-full max-w-4xl text-center bg-black/75 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-gray-800/80 shadow-2xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm text-gray-300 italic max-w-2xl mx-auto line-clamp-2">
              "{currentPainting.caption}"
            </p>
          </div>
        </div>
      )}

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 sm:p-3.5 rounded-full bg-[#ffC31f] text-black shadow-2xl hover:scale-110 transition-all duration-300"
          title="Back to top"
        >
          <FaArrowUp className="text-sm sm:text-base" />
        </button>
      )}

      {/* Footer */}
      <footer
        id="portfolio-footer"
        className="mt-12 sm:mt-20 bg-[#090c10] border-t border-gray-800 py-8 sm:py-10 text-center text-gray-400"
        style={backgroundBlurStyle}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <p className="text-xs sm:text-sm mb-3 sm:mb-4">&copy; 2026 Nimish Shah. All rights reserved.</p>

          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <a 
              href="https://github.com/nimish1969" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs border border-gray-700 transition-colors"
            >
              <FaGithub /> nimish1969
            </a>
          </div>

          <code className="text-[10px] sm:text-xs text-gray-500 font-mono">
            Crafted with ❤️ by{" "}
            <a 
              href="https://github.com/paurav11" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#ffC31f] hover:underline"
            >
              Paurav Shah
            </a>
            .
          </code>
        </div>
      </footer>
    </div>
  );
}
