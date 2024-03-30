"use strict";


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
	
		
	

{
	const scriptsInEvents = {

		async Game_event_Event186_Act3(runtime, localVars)
		{
			SubmitLeaderboardScore(runtime.globalVars.Player_Rank);
		},

		async Ads_Event2_Act1(runtime, localVars)
		{
			InitExternEval();
		},

		async Ads_Event3_Act1(runtime, localVars)
		{
			ExternEval();
		},

		async Ads_Event4_Act1(runtime, localVars)
		{
			runtime.globalVars.adActive = window.adRunning;
		},

		async Ads_Event4_Act2(runtime, localVars)
		{
			runtime.globalVars.Ads = window.adRunning;
		},

		async Ads_Event4_Act3(runtime, localVars)
		{
			runtime.globalVars.myLeaderboardScore = window.myLeaderboardScore;
		},

		async Ads_Event4_Act4(runtime, localVars)
		{
			if (window.playerName.length > 12)
			{
				runtime.globalVars.lbPlayerName = window.playerName.substring(0, 12);
			}
			else
			{
				runtime.globalVars.lbPlayerName = window.playerName;
			}
		},

		async Ads_Event4_Act5(runtime, localVars)
		{
			runtime.globalVars.lbGameLang = window.gameLang;
		},

		async Ads_Event4_Act6(runtime, localVars)
		{
			runtime.globalVars.GamePlatform = window.adPlatform;
		},

		async Ads_Event5_Act5(runtime, localVars)
		{
			console.log("C3 Ad Active");
		},

		async Ads_Event7_Act2(runtime, localVars)
		{
			console.log("C3 Ad Deactive");
		},

		async Ads_Event11_Act1(runtime, localVars)
		{
			console.log("Pressed K");
			window.adRunning = 1;
		},

		async Ads_Event12_Act1(runtime, localVars)
		{
			console.log("Pressed L");
			window.adRunning = 0;
		}

	};
	
	self.C3.ScriptsInEvents = scriptsInEvents;
}
