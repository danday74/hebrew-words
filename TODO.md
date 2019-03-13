* 2 = title for word on each letter, title for each letter on each letter

Need a layer for consonants so we can turn everything else off
Need a layer for shin and sin dots (with consonants only) ...
  They may be turned off so cannot be part of consonants layer
  They may be colored diff than dagesh and/or vowel so cannot be part of those layers
Need a layer for dagesh (with consonants only)
Need a layer for vowels (with consonants only)

ALL LAYERS HAVE SAME CSS CLASSES BUT DIFF TITLES - WORK ON TITLES LATER

layers:
  
  consonants only * 2:
  
    css class for syllable - e.g. syllable-1 syllable-2
	  css class for doubles - e.g. syllable-1-2 (gradient on doubles)
	  css class for consonants that are vowels e.g. consonant-as-vowel
	  css class for begad-kepat
	  css class for strong / weak dagesh
	  name - e.g. heh qamats-heh heh-in-qamats-heh
	  css class for qamats qatan
	  css class for silent / moving sheva

  shin and sin dots:
  
    same as consonants layer but with dots
	
  dagesh:

    same as consonants layer but with dagesh
          
  vowels:
  
    same as consonants layer but with vowels

A LAYER LOOKS LIKE THIS:

<span class="layer-chunk dagesh-layer">  !!!THE LAYER DATA CHANGES BETWEEN LAYERS!!!
  <span class="letter-chunk syllable-1 letter-1">
    <span class="consonant-chunk consonant-as-vowel begad-kepat shin">
      <span class="shin-and-sin-chunk"> MIGHT NOT NEED THIS - JUST ON AND OFF
        <span class="dagesh-chunk strong">
          <span class="vowel-chunk qamats-qatan">
            <span class="content-chunk">
		          STUFF  !!!THE STUFF CHANGES BETWEEN LAYERS!!!
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
  <span class="letter-chunk syllable-1 letter-2">
    <span class="consonant-chunk consonant-as-vowel begad-kepat shin">
      <span class="shin-and-sin-chunk"> MIGHT NOT NEED THIS - JUST ON AND OFF
        <span class="dagesh-chunk strong">
          <span class="vowel-chunk qamats-qatan">
            <span class="content-chunk">
		          STUFF  !!!THE STUFF CHANGES BETWEEN LAYERS!!!
            </span>
          </span>
        </span>
      </span>
    </span>
  </span>
</span>
