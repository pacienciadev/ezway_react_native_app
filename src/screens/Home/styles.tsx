import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  sectionHorizontal: {paddingHorizontal: 8, gap: 8},
  customAppBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 64,
    paddingHorizontal: 12,
  },
  logoEzway: {
    width: 112,
  },
  fab: {
    position: 'absolute',
    right: 22,
    bottom: 28,
    backgroundColor: '#FFD098',
  },
});
