import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import {Icon, SearchBar} from '@rneui/themed';
import {useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import {styles} from './style';
import {darkMode, lightMode} from '../../../Utils/Colors';

const DropDownContent = props => {
  const status = useSelector(state => state.otherReducer.status);
  const [mainData, setMainData] = useState(props.data);
  const [filterData, setFilterData] = useState(props.data);
  const [searchItem, setUpdateSearchItem] = useState('');
  const [tempSelectedItem, setTempSelectedItem] = useState([]);
  const [tempAddedItem, settempAddedItem] = useState([]);
  const [inputText, setinputText] = useState('');

  useEffect(() => {
    reset(props.data);
  }, [props.data]);

  //Function to remove selected item from "tempSelectedItem" Array.
  const handleRemove = id => {
    const newItem = tempSelectedItem.filter(item => item.id !== id);
    setTempSelectedItem(newItem);
  };

  //Function to check if clicked item is already exists in the "tempSelectedItem" array or not.
  const checkSimilarity = id => {
    let newPeople = null;
    newPeople = tempSelectedItem.filter(person => person.id === id);
    return newPeople.length > 0 ? true : false;
  };

  //Function to seacrh matching input item in "filterData" Array
  const searchFilter = text => {
    if (text) {
      const newData = mainData.filter(item => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setUpdateSearchItem(text);
    } else {
      setFilterData(mainData);
      setUpdateSearchItem(text);
    }
  };

  //Function to assign "tempSelectedItem" items in "selectedItem" array, which is an array passed as props through parent component.
  const finalSubmission = () => {
    props.setSelectedItem([...tempAddedItem, ...tempSelectedItem]),
      props.setData([...tempAddedItem, ...tempSelectedItem]);
    props.setChangeModalStatus(!props.modalStatus);
  };

  //Function to reset or pass list as empty.
  const reset = data => {
    setTempSelectedItem([]), props.setSelectedItem([]), setFilterData(data);
    setMainData(data);
    setinputText('');
    settempAddedItem([]);
  };

  const onChangeTempItem = () => {
    settempAddedItem(oldArray => [
      ...oldArray,
      {id: uuid.v4(), title: inputText},
    ]);
    setinputText('');
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.modalStatus}
      onRequestClose={() => props.setChangeModalStatus(!props.modalStatus)}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeScreenIconContainer}
          onPress={() => props.setChangeModalStatus(!props.modalStatus)}>
          <Icon color="#ffffff" type="antdesign" name="close" />
        </TouchableOpacity>
        <View
          style={[
            styles.contentContainer,
            status
              ? darkMode.containerbackgroundColor
              : lightMode.containerbackgroundColor,
          ]}>
          <View style={styles.headerContainer}>
            <Text
              style={[
                styles.headerTitle,
                status ? darkMode.textColor : lightMode.textColor,
              ]}>
              Select Options
            </Text>
          </View>
          <SearchBar
            containerStyle={[
              styles.searchBarContainerStyle,
              status
                ? darkMode.containerbackgroundColor
                : lightMode.containerbackgroundColor,
            ]}
            inputContainerStyle={[
              styles.inputContainerStyle,
              status
                ? darkMode.screenBackgroundColors
                : lightMode.screenBackgroundColors,
            ]}
            inputStyle={[
              styles.input,
              status ? darkMode.textColor : lightMode.textColor,
            ]}
            placeholder="Type Here..."
            placeholderTextColor={status ? '#bfbfbf' : '#737373'}
            onChangeText={text => searchFilter(text)}
            value={searchItem}
          />
          <FlatList
            contentContainerStyle={styles.itemsListContainer}
            maxToRenderPerBatch={10}
            initialNumToRender={5}
            data={filterData}
            renderItem={({item, id}) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.6}
                style={[
                  styles.itemContainer,
                  status
                    ? darkMode.screenBackgroundColors
                    : lightMode.screenBackgroundColors,
                ]}
                onPress={() =>
                  checkSimilarity(item._id)
                    ? handleRemove(item._id)
                    : setTempSelectedItem(oldArray => [
                        ...oldArray,
                        {id: item._id, title: item.title},
                      ])
                }>
                <Text
                  numberOfLines={1}
                  style={{
                    color: checkSimilarity(item.id)
                      ? '#00d9ff'
                      : status
                      ? darkMode.textColor.color
                      : lightMode.textColor.color,

                    fontWeight: checkSimilarity(item.id) ? '800' : '500',
                  }}>
                  {item.title}
                </Text>
                <Text> </Text>
                {checkSimilarity(item._id) && (
                  <Icon
                    type="feather"
                    name="check-circle"
                    size={18}
                    color="#00d9ff"
                  />
                )}
              </TouchableOpacity>
            )}
          />
          {props?.addMore && (
            <>
              <View style={styles.container7}>
                <Text
                  style={[
                    styles.headerTitle,
                    status ? darkMode.textColor : lightMode.textColor,
                  ]}>
                  Not in the list ? Add More +
                </Text>
              </View>

              <View style={styles.container1}>
                <View style={styles.container2}>
                  <View
                    style={[
                      styles.container3,
                      status
                        ? darkMode.borderColorPrimary
                        : lightMode.borderColorPrimary,
                    ]}>
                    <TextInput
                      value={inputText}
                      onChangeText={setinputText}
                      placeholder="Type Here..."
                      keyboardType="default"
                      numberOfLines={1}
                      style={[styles.input2]}
                      placeholderTextColor={[
                        styles.inputTitle,
                        status ? darkMode.textColor : lightMode.textColor,
                      ]}
                    />
                  </View>
                  <View style={styles.container4}>
                    {inputText.length > 0 ? (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={[
                          styles.btn1,
                          {
                            backgroundColor: '#00d9ff',
                          },
                        ]}
                        onPress={() => onChangeTempItem()}>
                        <Text style={styles.title1}>Add</Text>
                      </TouchableOpacity>
                    ) : (
                      <View
                        style={[
                          styles.btn1,
                          status
                            ? darkMode.screenBackgroundColors
                            : lightMode.screenBackgroundColors,
                        ]}>
                        <Text
                          style={[
                            styles.title1,
                            status ? darkMode.textColor : lightMode.textColor,
                          ]}>
                          Add
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
                {tempAddedItem.length > 0 && (
                  <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.container5}>
                    {tempAddedItem.map((item, id) => (
                      <View key={id} style={styles.container6}>
                        <Text style={styles.title2}>{item.title}</Text>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            </>
          )}
          <View style={styles.submitbtnContainer}>
            {(tempSelectedItem.length > 0 || tempAddedItem.length > 0) && (
              <TouchableOpacity
                style={styles.submitbtn}
                onPress={() => finalSubmission()}>
                <Text style={styles.title}>Submit</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const MultiSelectDropDownMenuComponent = ({
  rootContainerStyles = {
    paddingRight: 4,
    paddingLeft: 10,
    paddingTop: 16,
  },
  data = null,
  setData = null,
  id = 'id',
  label = 'label',
  title = 'Select from List',
  addMore = false,
  touchableAreaStyles = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#00d9ff',
    borderRadius: 4,
  },
  iconColor = '#000',
  touchableAreaTextStyles = {fontSize: 14},
  selectedContentContainerStyle = {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 4,
    paddingHorizontal: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  selectedItemStyles = {
    backgroundColor: '#00d9ff',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginHorizontal: 4,
    marginBottom: 4,
    borderRadius: 10,
  },
  selectedItemTextStyle = {},
  iconSize = 15,
}) => {
  const [selectedItem, setSelectedItem] = useState([]);
  const [modalStatus, setChangeModalStatus] = useState(false);

  const handleRemove = id => {
    const newItem = selectedItem.filter(item => item.id !== id);
    setSelectedItem(newItem);
  };

  return (
    <View style={rootContainerStyles}>
      <TouchableOpacity
        style={touchableAreaStyles}
        onPress={() => setChangeModalStatus(!modalStatus)}>
        <Text style={touchableAreaTextStyles}>{title}</Text>
        <Icon
          type="material-community"
          name="chevron-down"
          size={iconSize}
          color={iconColor}
        />
      </TouchableOpacity>

      <DropDownContent
        data={data}
        addMore={addMore}
        setSelectedItem={setSelectedItem}
        setData={setData}
        modalStatus={modalStatus}
        id={id}
        label={label}
        setChangeModalStatus={setChangeModalStatus}
      />
      {selectedItem.length > 0 && (
        <View style={selectedContentContainerStyle}>
          {selectedItem.map((item, id) => (
            <View
              key={id}
              style={selectedItemStyles}
              onPress={() => handleRemove(item.id)}>
              <Text numberOfLines={1} style={selectedItemTextStyle}>
                {item.title}
              </Text>
              <TouchableOpacity onPress={() => handleRemove(item.id)}>
                <Icon
                  type="ionicon"
                  name="close"
                  size={iconSize}
                  color="#000"
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default MultiSelectDropDownMenuComponent;
