import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
  pairActionButtons: {
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLogoHero: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 22,
    paddingTop: 44,
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
