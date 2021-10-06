export const ALL_ACTIVE_VIDEO_TUTORIALS = 'ALL_ACTIVE_VIDEO_TUTORIALS';

export function allActiveVideoTutorials(data) {
  //  console.log('process-us_actions.sampleTemplates', data);
    return {
      type: ALL_ACTIVE_VIDEO_TUTORIALS,
      DATA: data
    }
}
