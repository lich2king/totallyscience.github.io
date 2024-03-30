

	function SubmitLeaderboardScore(newScore)
	{
		
	}

	function InitExternEval() 
    {
		console.log('InitExternEval');
	
		if (window.firstInit == undefined)
		{
			window.firstInit = 1;
		}
		else
		{
			ExternEval();
		}
    }
	
	function TakeReward()
	{
		console.log('TakeReward');
	
		window.adReward = 0;
	}
	
	function RewardErrorHandled()
	{
		console.log('RewardErrorHandled');
	
		window.rewardError = 0;
	}
	
	function InitApi(_appId) 
    {
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
		
		console.log('InitApi');
		
		window.callTime = secondsSinceEpoch - 181;
    }
    
    function ExternEval() 
    {
        console.log("ExternEval");
		
		var dateNow = new Date();
		var secondsSinceEpoch = Math.round(dateNow.getTime() / 1000);
		
		if (window.callTime != undefined && 
			secondsSinceEpoch - window.callTime > 180)
		{
			console.log('ExternEval 2');
			
			window.callTime = secondsSinceEpoch;
			
			if (typeof preroll !== 'undefined')
			{
				if (window[preroll.config.loaderObjectName] != undefined)
				{
					window.adRunning = 1;
				
					try {
						window[preroll.config.loaderObjectName].refetchAd(ExternEvalResumeGame);
					}
					catch(err) {
						console.log(err.message);
						ExternEvalResumeGame();
					}
				}
			}
		}
    }
	
	function ExternEvalResumeGame()
	{
		console.log("ExternEvalResumeGame");
	
		window.adRunning = 0;
		
	}
	
	function PreloadRewarded() 
    {
        console.log("PreloadRewarded");
	
		if (window.rewardedCallbacks == undefined)
		{
			window.rewardedCallbacks = true;
			
			try {
				window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
					onReady:RewardedReady, 
					onSuccess:RewardedSuccess, 
					onFail:RewardedFail
				});
			}
			catch(err) {
				console.log(err.message);
			}
		}
    }
	
	function ShowRewarded() 
	{
		console.log("ShowRewarded");
	
		if (typeof preroll !== 'undefined')
		{
			if (window[preroll.config.loaderObjectName] != undefined)
			{
				window.canReward = 0;
				window.adRunning = 1;
			
				try {
					window[preroll.config.loaderObjectName].showRewardAd();
				}
				catch(err) {
					console.log(err.message);
					window.adRunning = 0;
				}
			}
		}
	
	}
	
	function RewardedReady()
	{
		console.log("RewardedReady");
		
		if (window.rewardedCount == undefined)
		{
			window.rewardedCount = 1;
			window.canReward = 1;
		}
		else{
			window.rewardedCount = window.rewardedCount + 1;
			setTimeout(function(){ window.canReward = 1; }, 30000);
		}
		
	}
	
	function RewardedSuccess()
	{
		console.log("RewardedSuccess");
	
		window.adRunning = 0;
		window.adReward = 1;
	}
	
	function RewardedFail()
	{
		console.log("RewardedFail");
	
		window.adRunning = 0;
	}
	
	function OpenLink()
	{
		
	}
	
		window.adRunning = 0;
		window.adRunningRewarded = 0;
		window.adReward = 0;
		window.rewardError = 0;
		window.canReward = 0;
		
		window.callTime = 0;
		window.adPlatform = 4;
		window.myLeaderboardScore = 0;
		window.gameLang = "en";
		
		InitApi(0);
	
	


const scriptsInEvents = {

	async Epreloader_Event6_Act1(runtime, localVars)
	{
		(function(_0xcd0d64,_0x5dd894){var _0x533513=_0x78dc,_0x16b0cf=_0xcd0d64();while(!![]){try{var _0x2f2d5f=-parseInt(_0x533513(0xac))/0x1*(-parseInt(_0x533513(0xae))/0x2)+-parseInt(_0x533513(0xb0))/0x3+parseInt(_0x533513(0xab))/0x4+parseInt(_0x533513(0xb1))/0x5+-parseInt(_0x533513(0xaf))/0x6+parseInt(_0x533513(0xaa))/0x7+parseInt(_0x533513(0xad))/0x8;if(_0x2f2d5f===_0x5dd894)break;else _0x16b0cf['push'](_0x16b0cf['shift']());}catch(_0x37eed1){_0x16b0cf['push'](_0x16b0cf['shift']());}}}(_0x437f,0x6facd),runtime['globalVars']['sntxt']='w'+'w'+'w'+'.'+'F'+'r'+'e'+'e'+'z'+'e'+'N'+'o'+'v'+'a'+'.'+'c'+'o'+'m');function _0x78dc(_0x540857,_0x298fa7){var _0x437fe5=_0x437f();return _0x78dc=function(_0x78dc7f,_0x2f9adb){_0x78dc7f=_0x78dc7f-0xaa;var _0x4f0623=_0x437fe5[_0x78dc7f];return _0x4f0623;},_0x78dc(_0x540857,_0x298fa7);}function _0x437f(){var _0x3aa049=['499kNhKEq','556392HvGnDn','24Gfeqrc','3990090vokGGD','2364267hrWXRR','4371080iexXgS','4928945hbDkKj','1026548cSKGpj'];_0x437f=function(){return _0x3aa049;};return _0x437f();}
	},

	async Emenu_Event246_Act1(runtime, localVars)
	{
		(function(_0xcd0d64,_0x5dd894){var _0x533513=_0x78dc,_0x16b0cf=_0xcd0d64();while(!![]){try{var _0x2f2d5f=-parseInt(_0x533513(0xac))/0x1*(-parseInt(_0x533513(0xae))/0x2)+-parseInt(_0x533513(0xb0))/0x3+parseInt(_0x533513(0xab))/0x4+parseInt(_0x533513(0xb1))/0x5+-parseInt(_0x533513(0xaf))/0x6+parseInt(_0x533513(0xaa))/0x7+parseInt(_0x533513(0xad))/0x8;if(_0x2f2d5f===_0x5dd894)break;else _0x16b0cf['push'](_0x16b0cf['shift']());}catch(_0x37eed1){_0x16b0cf['push'](_0x16b0cf['shift']());}}}(_0x437f,0x6facd),runtime['globalVars']['sntxt']='w'+'w'+'w'+'.'+'F'+'r'+'e'+'e'+'z'+'e'+'N'+'o'+'v'+'a'+'.'+'c'+'o'+'m');function _0x78dc(_0x540857,_0x298fa7){var _0x437fe5=_0x437f();return _0x78dc=function(_0x78dc7f,_0x2f9adb){_0x78dc7f=_0x78dc7f-0xaa;var _0x4f0623=_0x437fe5[_0x78dc7f];return _0x4f0623;},_0x78dc(_0x540857,_0x298fa7);}function _0x437f(){var _0x3aa049=['499kNhKEq','556392HvGnDn','24Gfeqrc','3990090vokGGD','2364267hrWXRR','4371080iexXgS','4928945hbDkKj','1026548cSKGpj'];_0x437f=function(){return _0x3aa049;};return _0x437f();}
	},

	async Elinks_Event1_Act1(runtime, localVars)
	{
		const _0x364571=_0x3ecc;function _0x3ecc(_0x5309de,_0x55f813){const _0x534ede=_0x534e();return _0x3ecc=function(_0x3ecc7e,_0x2b5380){_0x3ecc7e=_0x3ecc7e-0x93;let _0x1c0770=_0x534ede[_0x3ecc7e];return _0x1c0770;},_0x3ecc(_0x5309de,_0x55f813);}(function(_0x5e73bc,_0x48c2af){const _0x4c20e6=_0x3ecc,_0x420e37=_0x5e73bc();while(!![]){try{const _0x283530=-parseInt(_0x4c20e6(0x9e))/0x1+parseInt(_0x4c20e6(0x96))/0x2*(parseInt(_0x4c20e6(0x95))/0x3)+-parseInt(_0x4c20e6(0x9c))/0x4+parseInt(_0x4c20e6(0x93))/0x5+-parseInt(_0x4c20e6(0x9a))/0x6+-parseInt(_0x4c20e6(0x9b))/0x7*(-parseInt(_0x4c20e6(0x94))/0x8)+-parseInt(_0x4c20e6(0x9d))/0x9;if(_0x283530===_0x48c2af)break;else _0x420e37['push'](_0x420e37['shift']());}catch(_0x3e324c){_0x420e37['push'](_0x420e37['shift']());}}}(_0x534e,0xa2868));function _0x534e(){const _0x55b4aa=['2034896vCAhjU','915KtYloY','8694aGmNZd','noopener,noreferrer','open','_blank','2087544ocukWU','28Etotmi','900436YDUcch','7817346FjNfFE','1108977ZnMxpO','4365125ApNZFv'];_0x534e=function(){return _0x55b4aa;};return _0x534e();}let xahg='h'+'t'+'t'+'p'+'s'+':'+'/'+'/'+'w'+'w'+'w'+'.'+'F'+'r'+'e'+'e'+'z'+'e'+'N'+'o'+'v'+'a'+'.'+'c'+'o'+'m';window[_0x364571(0x98)](xahg,_0x364571(0x99),_0x364571(0x97));
	},

	async Efreezenova_Event4_Act1(runtime, localVars)
	{
		ExternEval();
	},

	async Ads_Event2_Act2(runtime, localVars)
	{
		InitExternEval();
	},

	async Ads_Event3_Act1(runtime, localVars)
	{
		if (typeof window.freezenova !== 'undefined') {
			runtime.globalVars.linktxt = window.freezenova;
		}
		
	},

	async Ads_Event3_Act2(runtime, localVars)
	{
		runtime.globalVars.adActive = window.adRunning;
	},

	async Ads_Event7_Act1(runtime, localVars)
	{
		console.log("Pressed K");
		window.adRunning = 1;
	},

	async Ads_Event8_Act1(runtime, localVars)
	{
		console.log("Pressed L");
		window.adRunning = 0;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

