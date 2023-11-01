const videoEl = document.getElementById("my-video");

const videoOptions = {
  autoplay: false,
  preload: "metadata",
  controls: true,
  poster: "",

  sources: [
    {
      src: "https://media.axprod.net/TestVectors/v9-MultiFormat/Encrypted_Cbcs/Manifest_1080p.mpd",
      type: "application/dash+xml",
      keySystems: {
        "com.widevine.alpha": {
          url: "https://drm-widevine-licensing.axtest.net/AcquireLicense",
          licenseHeaders: {
            "X-AxDRM-Message":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmOGM4MGMyNS02OTBmLTQ3MzYtODEzMi00MzBlNWM2OTk0Y2UiLCJlbmNyeXB0ZWRfa2V5IjoiaVhxNDlaODlzOGRDajBqbTJBN1h6UT09IiwidXNhZ2VfcG9saWN5IjoiUG9saWN5IEEifV19LCJjb250ZW50X2tleV91c2FnZV9wb2xpY2llcyI6W3sibmFtZSI6IlBvbGljeSBBIiwicGxheXJlYWR5Ijp7Im1pbl9kZXZpY2Vfc2VjdXJpdHlfbGV2ZWwiOjE1MCwicGxheV9lbmFibGVycyI6WyI3ODY2MjdEOC1DMkE2LTQ0QkUtOEY4OC0wOEFFMjU1QjAxQTciXX19XX19.k9OlwW0rUwuf5d5Eb0iO98AFR3qp7qKdFzSbg2PQj78",
          },
        },
      },
    },
  ],
  html5: {
    nativeAudioTracks: true,
    nativeVideoTracks: true,
    nativeTextTracks: true,
    nativeCaptions: false,
  },
};
const player = videojs(videoEl);
console.log("platyer", player);
player.eme();
player.src(videoOptions.sources);

// player.src({
//   src: "https://media.axprod.net/TestVectors/v9-MultiFormat/Encrypted_Cbcs/Manifest_1080p.mpd",
//   type: "application/dash+xml",
//   keySystems: {
//     "com.widevine.alpha": {
//       url: "https://drm-widevine-licensing.axtest.net/AcquireLicense",
//       licenseHeaders: {
//         "X-AxDRM-Message":
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiNjllNTQwODgtZTllMC00NTMwLThjMWEtMWViNmRjZDBkMTRlIiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsInZlcnNpb24iOjIsImxpY2Vuc2UiOnsiYWxsb3dfcGVyc2lzdGVuY2UiOnRydWV9LCJjb250ZW50X2tleXNfc291cmNlIjp7ImlubGluZSI6W3siaWQiOiJmOGM4MGMyNS02OTBmLTQ3MzYtODEzMi00MzBlNWM2OTk0Y2UiLCJlbmNyeXB0ZWRfa2V5IjoiaVhxNDlaODlzOGRDajBqbTJBN1h6UT09IiwidXNhZ2VfcG9saWN5IjoiUG9saWN5IEEifV19LCJjb250ZW50X2tleV91c2FnZV9wb2xpY2llcyI6W3sibmFtZSI6IlBvbGljeSBBIiwicGxheXJlYWR5Ijp7Im1pbl9kZXZpY2Vfc2VjdXJpdHlfbGV2ZWwiOjE1MCwicGxheV9lbmFibGVycyI6WyI3ODY2MjdEOC1DMkE2LTQ0QkUtOEY4OC0wOEFFMjU1QjAxQTciXX19XX19.k9OlwW0rUwuf5d5Eb0iO98AFR3qp7qKdFzSbg2PQj78",
//       },
//       audioRobustness: "SW_SECURE_CRYPTO",
//       videoRobustness: "HW_SECURE_ALL",
//     },
//   },
// });
