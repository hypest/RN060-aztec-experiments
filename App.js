/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import RCTAztecView from "react-native-aztec";

const App = () => {
  this.props = {
    placeholder: "boo",
  };
  const isSelected = true;
  const tagName = 'p';
  const html = "qweqwsdfdf sidfuhv osidufhv osidufhv osidufhv osidufhv osidufhv osdifuvh oweiurh oviudvh oieurh oieurh oiuhv oiuaerh voisufdhv oiuerh oivuerhv oiurehv oisdfuhv asd iasdf piasudhf iaudshf oiausdhf oiaweuhfo isaudh ofiuawhf ";
  const selection = null;

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          <TextInput
            text={"wwwwwww"}
            multiline
            placeholder="Above TextInput"
            style={{
              maxHeight: 100, // <- set the max height here

              // just some styling to make the input visible
              borderColor: "#1ca0ff",
              borderWidth: 1,
              padding: 10,
              width: "75%"
            }}
          />
          <RCTAztecView
            ref={ ( ref ) => {
              this._editor = ref;

              if ( this.props.setRef ) {
                this.props.setRef( ref );
              }
            } }
            // style={ {
            //   ...style,
            //   minHeight: Math.max( minHeight, this.state.height ),
            // } }
            text={ { text: html, eventCount: this.lastEventCount, selection } }
            placeholder={ this.props.placeholder }
            // placeholderTextColor={ this.props.placeholderTextColor || styles[ 'block-editor-rich-text' ].textDecorationColor }
            deleteEnter={ this.props.deleteEnter }
            onChange={ this.onChange }
            onFocus={ this.onFocus }
            onBlur={ this.onBlur }
            onEnter={ this.onEnter }
            onBackspace={ this.onBackspace }
            onPaste={ this.onPaste }
            // activeFormats={ this.getActiveFormatNames( record ) }
            onContentSizeChange={ this.onContentSizeChange }
            onCaretVerticalPositionChange={ this.props.onCaretVerticalPositionChange }
            onSelectionChange={ this.onSelectionChangeFromAztec }
            isSelected={ isSelected }
            blockType={ { tag: tagName } }
            color={ 'black' }
            maxImagesWidth={ 200 }
            fontFamily={ this.props.fontFamily }
            fontSize={ this.props.fontSize }
            fontWeight={ this.props.fontWeight }
            fontStyle={ this.props.fontStyle }
            disableEditingMenu={ this.props.disableEditingMenu }
            isMultiline={ this.isMultiline }
            textAlign={ this.props.textAlign }
          />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark
  },
  highlight: {
    fontWeight: "700"
  }
});

export default App;
